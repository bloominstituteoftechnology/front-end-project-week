import React, { Component } from 'react';
import { addNote } from './actions/actions.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class NoteForm extends Component {
  state = {
    title: '',
    text: '',
    redirect: false,
  };

  render() {
    return (
      <div>
        <h3 className='heading'>Create New Note:</h3>
        <form onSubmit={this.createNote}>
          <input
            className='formtitle'
            type='text'
            placeholder='Note Title'
            onChange={this.updateNote}
            name='title'
            value={this.state.title}
          />
          <textarea
            className='formtext'
            type='text'
            placeholder='Note Content'
            onChange={this.updateNote}
            name='text'
            value={this.state.text}
          />
          <button className='save-btn' type='submit'>
            Save
          </button>
        </form>
        {this.state.redirect ? <Redirect to='/noteslist' /> : null}
      </div>
    );
  }

  updateNote = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  createNote = event => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ redirect: true });
  };
}

export default connect(null, { addNote })(NoteForm);