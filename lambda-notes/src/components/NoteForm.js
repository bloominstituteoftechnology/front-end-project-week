import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class NoteForm extends Component {
  state = {
    title: '',
    textBody: ''
  };

  handleNoteInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const note = { title: this.state.title, textBody: this.state.textBody };
    this.props.addNote(note);
    this.setState({ title: '', textBody: '' });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="note title"
          onChange={this.handleNoteInput}
          name="title"
          value={this.state.title}
        />
        <input
          type="text"
          placeholder="note text"
          onChange={this.handleNoteInput}
          name="textBody"
          value={this.state.textBody}
        />
        <button onClick={this.handleSubmit}>Add New Note</button>
      </div>
    );
  }
}
export default connect(
  null,
  { addNote }
)(NoteForm);
