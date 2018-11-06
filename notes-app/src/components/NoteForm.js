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

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addNote = event => {
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    }
    axios
      .post('https://fe-notes.herokuapp.com/note/create', newNote)
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch( error => console.log(error))
  }



  render() {
    return (
      <div>
        <form onSubmit={this.addNote}>
          <label for='name'>Title: </label>
          <input 
            onChange={this.inputHandler}
            type='text' 
            name='title' 
            placeholder='title'
            value={this.state.title} 
          />
          <br></br>
          <label for='textBody'>Text: </label>
          <input 
            onChange={this.inputHandler}
            type='text'
            name='textBody'
            placeholder='text'
            value={this.state.textBody}
          />
          <br></br>
          <button type='submit'>Add Note</button>
        </form>
      </div>
    )
  }
}

export default NoteForm;