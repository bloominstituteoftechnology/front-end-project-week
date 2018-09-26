import React from 'react';
import {connect} from 'react-redux';

import {getNote,deleteNote,setEditNote} from '../store/actions';

import Note from '../components/Note/Note';

class NoteView extends React.Component {
    componentDidMount() {
        if (this.props.notesList.length === 0) {
            this.props.getNote();
        }
    }

    handleDeleteNote = noteId => {
        this.props.deleteNote(noteId);
    }

    goToEditNoteForm = (event, id) => {
        event.preventDefault();
        this.props.setEditNote(id);
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

export default connect(mapStateToProps, {getNote,deleteNote,setEditNote})(NoteView);