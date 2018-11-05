import React, { Component } from 'react';
import axios from 'axios';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.notes,
      title: '',
      textBody: ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={}>
          <label for='name'>Title:</label>
          <input 
            type='text' 
            name='title' 
            placeholder='title' 
          />
          <label for='textBody'>Text:</label>
          <input 
            type='text'
            name='textBody'
            placeholder='text'
          />
          <button type='submit'>Add Note</button>
        </form>
      </div>
    )
  }
}

export default NoteForm;