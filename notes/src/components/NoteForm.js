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
    this.setState({title: '', textBody: '', tags: ''})
  }

  render() {
    return (
      <div className='form-container'>
      <div className='form-headline'>
        <h2>Create New Note:</h2>
      </div >
      <div className="form">
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
            <button className="new-note-button" onClick={this.newNote} type="submit">
              New Note
            </button>
          </form>
        </div>

      </div>
    );
  }
}

export default NoteForm;
