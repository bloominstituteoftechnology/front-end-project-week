import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote, removeNote } from '../actions';
import { Container } from 'reactstrap';
import NoteCard from './NoteCard';
import DeleteModal from './DeleteModal';
import CheckList from './CheckList';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            checklist: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchNote(id);
        this.setState({checklist: this.props.currentNote.checklist})
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    }

    deleteNote = () => {
        const id = this.props.match.params.id
        this.props.removeNote(id)
        setTimeout(() => {
            this.props.history.push("/");
        }, 100);
    }

    handleCheckBox = (values) => {
        values.forEach(value => console.log(value));
    }

    render() { 
        return (
            this.state.checklist ? (
                <Container fluid={true}> 
                    <DeleteModal 
                        id={this.props.match.params.id}
                        modal={this.state.modal}
                        toggle={this.toggleModal}
                        deleteNote={this.deleteNote}/>
                    <NoteCard note={this.props.currentNote}/>
                    <CheckList checklist={this.state.checklist}/>
                </Container>
            ) : (
                <Container fluid={true}> 
                    <DeleteModal 
                        id={this.props.match.params.id}
                        modal={this.state.modal}
                        toggle={this.toggleModal}
                        deleteNote={this.deleteNote}/>
                    <NoteCard note={this.props.currentNote}/>
                </Container>
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote
    }
}
 
export default connect(mapStateToProps, { fetchNote, removeNote })(Note);