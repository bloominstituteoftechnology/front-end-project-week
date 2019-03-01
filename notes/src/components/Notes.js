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
          const { id } = this.props.noteSelected;
          this.props.deleteNote(id);
      };

    render() {
        return (
            <div className="note-container">
                <div className="notes">
                    {this.props.notes.map(note => {
                        return (
                            <div className="noteCard"onClick={() => this.handleShowNote(note)} key={note.id}>
                                <div className="name"><h2> {note.name}</h2></div>
                                <div className="details"><p>Date: {note.date}</p>
                                <p>Notes: <br></br><br></br> {note.notes}</p></div>
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