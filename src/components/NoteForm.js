import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { Link } from 'react-router-dom';

class NoteForm extends Component {
  state = {
    title: '',
    textBody: ''
  };

  componentDidMount() {
    console.log('note form mounted?');
    this.forceUpdate();
  }

  handleNoteInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const note = { title: this.state.title, textBody: this.state.textBody };
    console.log('note form');
    this.props.addNote(note);
    this.setState({ title: '', textBody: '' });
  };

  render() {
    return (
      <div className="single-note">
        <h3>Create New Note:</h3>
        <input
          className="note-title"
          type="text"
          placeholder="note title"
          onChange={this.handleNoteInput}
          name="title"
          value={this.state.title}
        />
        <input
          className="note-text"
          type="text"
          placeholder="note text"
          onChange={this.handleNoteInput}
          name="textBody"
          value={this.state.textBody}
        />
        <Link to="/">
          <button className="save-button" onClick={() => this.handleSubmit()}>
            Save
          </button>
        </Link>
      </div>
    );
  }
}
// pass in anonmyous function
export default connect(
  null,
  { addNote }
)(NoteForm);
