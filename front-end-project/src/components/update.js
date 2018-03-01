import React { Component } from 'react';

class Update extends Component {


 updateNoteTitle = (event) => {
    this.setState({
     notes: this.state.notes,
     newNote: {
        NoteTitle: event.target.value,
        NoteContent: this.state.newNote.NoteContent,
     },
     updateIndex: this.state.updateIndex,
    });
  };
 
  updateNoteContent = (event) => {
    this.setState({
      notes: this.state.notes,
      newNote: {
        NoteTitle: this.state.newNote.NoteTitle,
        NoteContent: event.target.value,
      },
      updateIndex: this.state.updateIndex,
    });
  };
 }

