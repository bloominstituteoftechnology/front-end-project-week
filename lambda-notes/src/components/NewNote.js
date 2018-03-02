import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteAPI from './NoteAPI';

class NewNote extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    // fetch('./NoteAPI', {
    //   method: 'POST',
    //   body: data,
    // });
  }

  render() {
    return (
      <div className="new-note">
        <div className="new-note-header">
          <h2>Create New Note:</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="new-note-title">
            <input
            className="new-note-title-input"
            id="noteTitle"
            type="text"
            name="title"
            placeholder="Note Title"
            />
          </div>
          <div className="new-note-content">
            <textarea
            className="new-note-content-input"
            id="noteContent"
            type="text"
            name="content"
            placeholder="Note Content"
            />
          </div>
          <button><Link to='/list'>Save</Link></button>
        </form>
      </div>
    )
  }
}

export default NewNote;