import React from 'react';
import { connect } from 'react-redux';

import { getNotes, deleteNote } from '../actions';

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

    render() {
        return (
            <Note 
              {...this.props} 
              notesList={this.props.notesList} 
              isLoading={this.props.isLoading}
              handleDeleteNote={this.handleDeleteNote}
            /> 
        );
    }
}

const mapStateToProps = state => ({
    notesList: state.notes,
    isLoading: state.isLoading,
});


export default connect(mapStateToProps, { getNotes, deleteNote})(NoteView);