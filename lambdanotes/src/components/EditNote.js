import React, { Component } from 'react';
import axios from 'axios';

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
    };
  }

  editNote = id => {
    axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, this.state)
    .then(() => this.fetchNote())
    .catch(err => {
      console.error(err);
    });
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <div className='new-note'>
        <h3>Edit Note:</h3>
        <form onSubmit={this.editNote}>
          <input 
            type='text'
            onChange={this.handleInput}
            placeholder='Note Title'
            value={this.state.title}
            name='title'
          />
          <input 
            type='text'
            onChange={this.handleInput}
            placeholder='Note Content'
            value={this.state.textBody}
            name='textBody'
          />
          <button type='submit'>Update</button>
        </form>
      </div>
    );
  }
}