import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class NoteNew extends Component {
  state = {
    title: '',
    body: ''
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAddNote = e => {
    e.preventDefault();
    const note = {
      title: this.state.title,
      textBody: this.state.body
    };
    this.props.addNote(note);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h2>Create a New Note</h2>
        <form onSubmit={this.handleAddNote}>
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleInput}
          />
          <textarea
            type="text"
            value={this.state.body}
            name="body"
            onChange={this.handleInput}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(NoteNew);
