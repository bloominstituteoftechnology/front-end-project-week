import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSingleNote, toggleShowUpdate, deleteNote } from '../actions';

class Notes extends Component {
    handleShowNote = note => {
        this.props.updateSingleNote(note);
      };

      toggleShowUpdate = () => {
        this.props.toggleShowUpdate();
      };

      handleDeleteNote = () => {
          const { _id } = this.props.noteSelected;
          this.props.deleteNote(_id);
      };

    render() {
        return (
            <div className="note-container">
                <div className="notes">
                    {this.props.notes.map(note => {
                        return (
                            <div className="noteCard"onClick={() => this.handleShowNote(note)} key={note._id}>
                                <div className="tags"><p>Tags: {note.tags}</p></div>
                                <div className="id"><p>ID: {note._id}</p></div>
                                <div className="details"><p>Title: {note.title}</p>
                                <p>Content: <br></br><br></br> {note.textBody}</p></div>
                            </div>
                        );
                    })}    
                </div>
            </div>
    );
    }
}

const mapStateToProps = state => {
    return {
        error: state.notesReducer.error,
        showUpdate: state.noteReducer.showUpdate,
        noteSelected: state.noteReducer.noteSelected,
        deletingNote: state.notesReducer.deletingNote
    }
}

export default connect(mapStateToProps, {
    updateSingleNote,
    toggleShowUpdate,
    deleteNote
})(Notes);