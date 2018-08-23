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
        id: 0
      },
      {
        noteName: 'Title of Note',
        noteText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
        id: 1
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
    const notes = this.state.notes.slice()
    let num = this.state.id
    num+=1
    this.setState({id: num})
    notes.push({
      noteName: this.state.noteName,
      noteText: this.state.noteText,
      id: this.state.id
    })
    this.setState({ noteName: '', noteText: '', notes: notes })
  }

  deleteNote = (e, id) => {
    e.preventDefault()
    let notes = this.state.notes.slice()
    notes = notes.filter(note => !note.id)
    this.setState({ notes: notes })
  }


  render() {
    return (
      <div>
        <NotesContainer note={this.state.notes} addNote={this.addNote} newNote={this.newNote} noteName={this.state.noteName} noteText={this.state.noteText} delete={this.deleteNote} />

      </div>
    );
  }
}

export default App;
