import React, { Component } from 'react';
import { withRouter } from 'react-router';
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
        const id = this.props.match.params.id;
        console.log("id: ", id)
        this.props.fetchNote(id);
        console.log("current note checklist: ", this.props.currentNote.checklist)

        if (this.props.currentNote.checklist) {
          this.setState({checklist: this.props.currentNote.checklist.split(',')})
        };
        
        console.log("checklist:", this.state.checklist)
    }

    toggleModal = () => {
        this.setState({modal: !this.state.modal});
    }

    deleteNote = () => {
        const id = this.props.match.params._id
        this.props.removeNote(id)
        this.props.history.push("/");
    }

    handleCheckBox = (values) => {
        values.forEach(value => console.log(value));
    }

    render() { 
      console.log("state: ", this.state)
        return (
            this.state.checklist.length > 0 ? (
                <Container fluid={true}> 
                    <DeleteModal 
                        id={this.props.match.params.id}
                        modal={this.state.modal}
                        toggle={this.toggleModal}
                        deleteNote={this.deleteNote}/>
                    <NoteCard note={this.props.currentNote}/>
                    <CheckList 
                        checklist={this.state.checklist}
                        id={this.props.match.params.id}/>
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
 
export default withRouter(connect(mapStateToProps, { fetchNote, removeNote })(Note));