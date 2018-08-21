import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer';
import Note from './components/NotesContainer/Note';
import CreateNote from './components/NoteActions/CreateNote';
import ViewNote from './components/NoteActions/ViewNote';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      notes: [],
      noteName: '',
      noteText: '',
    }
  }

  NewNote = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  AddNote = e => {
    e.preventDefault()
    const notes = this.state.notes.splice()
    notes.push({
      noteName: this.state.noteName,
      noteText: this.state.noteText
    })
  }


  render() {
    return (
      <div>
        <NotesContainer />

      </div>
    );
  }
}

export default App;
