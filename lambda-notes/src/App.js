import React, { Component } from 'react';
import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer';
import styled from 'styled-components';

const NoteApp = styled.div`
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      noteName: '',
      noteText: '',
      id: 0,

      clicked: 0,

      editName: '',
      editText: ''
    }
  }

  newNote = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addNote = e => {
    e.preventDefault()
    const notes = this.state.notes.slice()
    notes.push({
      noteName: this.state.noteName,
      noteText: this.state.noteText,
      id: this.state.notes.length
    })
    this.setState({ noteName: '', noteText: '', notes: notes })
    this.setState({ id: this.state.notes.length })
  }

  viewClick = id => {
    this.setState({ clicked: id })
  }

  deleteNote = (id) => {
    let notes = this.state.notes
    notes.splice(this.state.clicked, 1)
    this.setState({ notes: notes })

    let newId = this.state.notes.slice()
    newId.forEach(note => note.id > this.state.clicked ? --note.id : null)
    this.setState({ notes: newId })

  }

  editSubmit = e => {
    e.preventDefault()
    let notes = this.state.notes.slice()
    notes[this.state.clicked].noteName = this.state.editName
    notes[this.state.clicked].noteText = this.state.editText

    this.setState({ notes: notes, editName: '', editText: '' })
  }


  render() {
    return (
      <NoteApp>
        <NotesContainer editSubmit={this.editSubmit} clicked={this.state.clicked} viewClick={this.viewClick} note={this.state.notes} addNote={this.addNote} newNote={this.newNote} noteName={this.state.noteName} noteText={this.state.noteText} delete={this.deleteNote} />

      </NoteApp>
    );
  }
}

export default App;
