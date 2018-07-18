import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { postNewNote } from '../actions/index';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.note = { title: '', textBody: '' };
    this.postNewNote = this.postNewNote.bind(this);
  }

  postNewNote(note) {
    // move function is passed as callback to Action Creator to provide
    // cause navigation to NoteGrid on success
    const move = id => {
      this.props.history.push(`/view/${id}`);
    };
    this.props.postNewNote(note, move);
  }

  render() {
    return (
      <NoteForm
        note={this.note}
        titleText="Create New Note"
        buttonText="Save"
        handleFormSubmit={this.postNewNote}
      />
    );
  }
}

export default connect(
  null,
  { postNewNote }
)(NewNote);
