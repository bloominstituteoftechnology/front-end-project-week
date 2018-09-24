import React from 'react';
import { connect } from 'react-redux';

import { fetchNotes } from '../actions';

import Note from '../components/Note';

class NoteView extends React.Component {
    componentDidMount() {
        if (this.props.notes.length === 0) {
            this.props.fetchNotes();
        }
    }

    handleDeleteNote = noteId => {
        this.props.deleteNote(noteId);
    }

    goToUpdateNoteForm = (event, id) => {
        event.preventDefault();
        this.props.setUpdateNote(id);
        this.props.history.push('/addNote');
    }

    render() {
        return (
            <Note
            {...this.props}
            notes={this.props.notes}
            isLoading={this.props.isLoading}
            handleDeleteNote={this.handleDeleteNote}
            goToUpdateNoteForm={this.goToUpdateNoteForm}
            />
        );
    }
}

const mapStateToProps = state => ({
    notes: state.notes,
    isLoading: state.isLoading
});

export default connect(mapStateToProps, {fetchNotes})(NoteView);