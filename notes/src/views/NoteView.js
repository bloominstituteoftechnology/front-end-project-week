import React from 'react';
import { connect } from 'react-redux';

import { getNotes, deleteNote, setUpdateNote, getNote} from '../actions';

import Note from '../components/Note';

class NoteView extends React.Component {
    componentDidMount() {
        if (this.props.notesList.length === 0) {
            this.props.getNotes();
        }
    }

    handleDeleteNote = noteId => {
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
              goToUpdateNoteForm={this.goToUpdateNoteForm}
              note={this.props.note}
            /> 
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes,
    isLoading: state.isLoading,
    note: state.note
});


export default connect(mapStateToProps, { getNotes, deleteNote, setUpdateNote, getNote})(NoteView);