import React, { Component } from 'react';
import './Notes.css';
import axios from 'axios';

class CreateNote extends Component {
constructor(props) {
  super(props);
  this.state = {
    notes:[]    
  }
}
inputChangehandler = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}
addNew = (e) => {
  e.preventDefault();
  const newNote = {
    title: e.title,
    textBody: e.textBody
  }
  axios
      .post(`https://fe-notes.herokuapp.com/note/create`, newNote)       
      
      .then((response) => {
        newNote.id = response.data.success;
          this.setState({
          notes: [...this.state.notes, newNote],
      })
    })
      .catch(err => console.log(err));
     
  }
render() {
  return (
    <div className="createContainer">
        <h1>Create New Note:</h1>
      <div className="form" onSubmit={this.addNew}>
        <input className="title" 
              type='text' 
              name='title'
              placeholder='Note Title' 
              onChange={this.inputChangehandler}
              value={this.state.title} />

          <input className="textBody" 
              type='text' 
              name='textBody'
              placeholder='Note Content' 
              onChange={this.inputChangehandler}
              value={this.state.textBody} />
          <button type='submit'>Save</button>       
      </div>
    </div>
  )}
}
export default CreateNote;