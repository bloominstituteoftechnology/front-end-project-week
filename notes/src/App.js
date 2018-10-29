import React, { Component } from 'react';
import './App.css';
import {NoteData} from './NoteData';
import Notes from './components/Notes';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: NoteData,
      title: '',
      body: '',
    }
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submitHandler = event => {
    event.preventDefault();
    if (this.state.title !== '' && this.state.body !== '') {
      const newNote = {
        title: this.state.title,
        body: this.state.body,
        id: this.state.notes.length,
      }
      let notes = this.state.notes;
      notes.push(newNote);
      this.setState({
        notes: notes,
        title: '',
        body: '',
      })
    }
    else {
      alert('Please fill out the form!')
    }
    event.target.reset();
  }

  deleteHandler = id => {
    const filteredNotes = this.state.notes.filter(note => note.id !== id)
    this.setState({notes: filteredNotes});
  }

  render() {
    return (
      <div className="App">
        <h1>Vellum: A Modern Notes Platform</h1>
        <Form changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        <Notes notes={this.state.notes} deleteHandler={this.deleteHandler}/>
      </div>
    );
  }
}

export default App;
