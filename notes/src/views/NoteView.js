import React from 'react';
import {connect} from 'react-redux';

import {getNotes,deleteNote,editNote} from '../store/actions';

import Note from '../components/Note/Note';

class NoteView extends React.Component {
    componentDidMount() {
        if (this.props.notesList.length === 0) {
            this.props.getNotes();
        }
    }

    handleDeleteNote = noteId => {
        this.props.deleteNote(noteId);
    }

    goToEditNoteForm = (event, id) => {
        event.preventDefault();
        this.props.editNote(id);
        this.props.history.push('/CreateNote');
    }

    render() {
        return (
            <Note
            {...this.props}
            notesList={this.props.notesList}
            isLoading={this.props.isLoading}
            handleDeleteNote={this.handleDeleteNote}
            goToEditNoteForm={this.goToEditNoteForm}
            />
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes,
    isLoading: state.isLoading,
});

export default connect(mapStateToProps, {getNotes,deleteNote,editNote})(NoteView);