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
                <div className="menu">
                    <h1>Lambda<br></br>Notes</h1>
                    <h3 className="menu-button">View Your Notes</h3>
                    <h3 className="menu-button">+Create New Note</h3>
                </div>
                <div className="notes">
                    <h2 className="your-notes">Your Notes:</h2>
                    {this.props.notes.map(note => {
                        return (
                            <div className="noteCard" onClick={() => this.handleShowNote(note)} key={note._id}>
                                <div className="details">
                                    <h2 className="title">{note.title.length > 20 ? `${note.title.slice(0, 20)}...` : note.title}</h2>
                                    <p className="content">{note.textBody.length > 140 ? `${note.textBody.slice(0, 140)}...` : note.textBody}</p>
                                </div>
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