import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer';
import Note from './components/NotesContainer/Note';
import CreateNote from './components/NoteActions/CreateNote';
import ViewNote from './components/NoteActions/ViewNote';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [{
        noteName: 'Note Title',
        noteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        id: 62
      },
      {
        noteName: 'Note Title',
        noteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        id: 52
      },
      ],
      noteName: '',
      noteText: '',
      id: 0
    }
  }

  newNote = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addNote = e => {
    e.preventDefault()
    const notes = this.state.notes.splice()
    ++this.state.id
    this.state.notes.push({
      noteName: this.state.noteName,
      noteText: this.state.noteText,
      id: this.state.id
    })
    this.setState({noteName: '', noteText: ''})
  }


  render() {
    return (
      <div>
        <NotesContainer note={this.state.notes} addNote={this.addNote} newNote={this.newNote} noteName={this.state.noteName} noteText={this.state.noteText} />

      </div>
    );
  }
}

export default App;
