import React, { Component } from 'react';
import axios from 'axios';

class NoteForm extends Component {
  constructor() {
    super()
      this.state ={
        title: '',
        textBody: '',
        tags: '',
      }
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  newNote = (event) => {
    event.preventDefault();
    this.props.createNote(this.state)
  }

  render() {
    return (
      <div >
          <form onSubmit={this.newNote} >
            <input
              onChange={this.handleInputChange}
              placeholder="title"
              value={this.state.title}
              name="title"
              type="text"
            />
            <textarea
              onChange={this.handleInputChange}
              placeholder="write your note here"
              value={this.state.textBody}
              name="textBody"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="tags"
              value={this.state.tags}
              name="tags"
              type="text"
            />
            <button onClick={this.newNote} type="submit">
              New Note
            </button>
          </form>

      </div>
    );
  }
}

export default NoteForm;
