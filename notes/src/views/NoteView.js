import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getNotes, deleteNote } from '../actions';

import Note from '../components/Note';

class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {}
        };
    }
    componentDidMount() {
       const noteId = this.props.match.params.id;
       axios.get(`https://killer-notes.herokuapp.com/note/get/${noteId}`)
            .then(response=> {
                console.log(response);
                this.setState({note: response.data});
            })
            .catch(err=> {
                console.log(err);
            });
    }

    handleDeleteNote = noteId => {
        console.log(noteId);
        this.props.deleteNote(noteId);
    }

    goToUpdateNoteForm = (event, id) => {
        event.preventDefault();
        this.props.setUpdateNote(id);
        this.props.history.push('/note-form');
    }

    render() {
        return (
            <Note 
              {...this.props} 
              notesList={this.props.notesList} 
              isLoading={this.props.isLoading}
              handleDeleteNote={this.handleDeleteNote}
              note={this.state.note}
            /> 
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes,
    isLoading: state.isLoading,
});


export default connect(mapStateToProps, { getNotes, deleteNote})(NoteView);