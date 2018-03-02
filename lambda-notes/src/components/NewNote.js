import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteAPI from './NoteAPI';

let idCounter = 6;

class NewNote extends Component {
  state = {
    id: '',
    title: '',
    content: '',
  }

  addNote = (event) => {
    event.preventDefault();
    idCounter++;
    const notes = NoteAPI.notes;
    this.setState({
      id: idCounter,
      title: this.state.title,
      content: this.state.content,
    });
    notes.push(this.state);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className="new-note">
        <div className="new-note-header">
          <h2>Create New Note:</h2>
        </div>
        <form onSubmit={this.addNote}>
          <div className="new-note-title">
            <input
            className="new-note-title-input"
            type="text"
            name="title"
            placeholder="Note Title"
            onChange={this.handleChange}
            value={this.state.title}
            />
          </div>
          <div className="new-note-content">
            <textarea
            className="new-note-content-input"
            type="text"
            name="content"
            placeholder="Note Content"
            onChange={this.handleChange}
            value={this.state.content}
            />
          </div>
          <button stype="submit"><Link to='/list'>Save</Link></button>
        </form>
      </div>
    )
  }
}

export default NewNote;