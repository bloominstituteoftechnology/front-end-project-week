import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from './actions/index';
import { withRouter } from 'react-router-dom';

import { NoteButton, FullNoteContainer, NoteButtonContainer } from './StyledComponents';
import DeleteModal from './DeleteModal';


class FullNote extends React.Component {
    constructor(props){
        super(props);
        this.state={
            note: [],
            delete: false,
        }
    }

    componentDidMount(){
        const note = this.props.notes.find(item=> `${item._id}` === this.props.match.params.id);
        this.setState({
            note: note,
        })
    }

    popup = (e) => {
        e.preventDefault();
        this.setState({
            delete: !this.state.delete
        })
    }

    closeForm = (e) => {
        this.setState({
            delete: !this.state.delete
        })
    }


    deleter = (e) => {
        this.props.deleteNote(this.state.note._id)
        setTimeout(()=>{this.props.history.push('/notes')}, 1000)
    }

    updateRoute = (e) => {
        this.props.history.push(`/edit/${this.state.note._id}`)
    }

    render(){
        if(!this.state.note) return null;
        return(
            <FullNoteContainer>
                <NoteButtonContainer>
                    <NoteButton onClick={this.updateRoute}>edit</NoteButton>
                    <NoteButton onClick={this.popup}>delete</NoteButton>
                </NoteButtonContainer>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>

                {this.state.delete ? <DeleteModal delete={this.deleter} closeForm={this.closeForm} /> : null }

            </FullNoteContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
};

export default withRouter(connect(mapStateToProps, { deleteNote })(FullNote));