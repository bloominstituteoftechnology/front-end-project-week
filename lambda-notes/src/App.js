import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer';
import styled from 'styled-components';
import Note from './components/NotesContainer/Note';
import CreateNote from './components/NoteActions/CreateNote';
import ViewNote from './components/NoteActions/ViewNote';
import { Route, NavLink } from 'react-router-dom';

const NoteApp = styled.div`
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      noteName: '',
      noteText: '',
      id: 0
    }
    console.log(this.state.id)
  }

  newNote = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addNote = e => {
    e.preventDefault()
    const notes = this.state.notes.slice()
    let num = this.state.id
    ++num
    this.setState({ id: num })
    notes.push({
      noteName: this.state.noteName,
      noteText: this.state.noteText,
      id: this.state.id
    })
    this.setState({ noteName: '', noteText: '', notes: notes })
    console.log(`Id is ${num}. State id is ${this.state.id}`)
  }

  deleteNote = (e, id) => {
    e.preventDefault()
    let notes = this.state.notes.slice()
    notes = notes.filter(note => !note.id)
    this.setState({ notes: notes })
    let num = this.state.id
    --num
    this.setState({ id: num })
    console.log(`Id is ${num}. State id is ${this.state.id}`)
  }


  render() {
    return (
      <NoteApp>
        <NotesContainer note={this.state.notes} addNote={this.addNote} newNote={this.newNote} noteName={this.state.noteName} noteText={this.state.noteText} delete={this.deleteNote} />

      </NoteApp>
    );
  }
}

export default App;
