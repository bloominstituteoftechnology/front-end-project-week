import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import NoteForm from '../components/NoteForm';

class CreateNoteView extends Component {
  state = {
    note: {
      title: '',
      body: ''
    }
  };

  addNewNote = note => {
    this.props.addNote(note);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="View">
        <h2>Create New Note</h2>
        <NoteForm addNewNote={this.addNewNote} />
      </div>
    );
  }
}

export default connect(
  null,
  { addNote }
)(CreateNoteView);


// M