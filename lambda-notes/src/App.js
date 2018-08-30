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
      id: 0,

      clicked: 0,

      editName: '',
      editText: ''
    }
    console.log(this.state.id)
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
    this.setState({ noteName: '', noteText: '', notes: notes})
    this.setState({ id: this.state.notes.length })
    console.log(`State id is ${this.state.id}`)
  }

  viewClick = id => {
    this.setState({clicked: id})
    console.log("clicked is now: " + this.state.clicked)
  }

  deleteNote = (id) => {
    console.log("this is the id: " + id)
    // e.preventDefault()
    let notes = this.state.notes
    notes.splice(this.state.clicked, 1)
    this.setState({notes: notes})
    let newId = this.state.notes.slice()
    newId.forEach(note => note.id> this.state.clicked ? --note.id : null)
    this.setState({notes: newId})
    // let notes = this.state.notes.slice()
    // let newNotes = []
    // for (let i = 0; i < notes.length; i++) {
    //   if (notes[i].id !== notes.id) {
    //     // notes.splice(i, 1);
    //     console.log(notes[i])
    //     newNotes.push(notes[i])
    //   }
    // }
    // this.setState({ notes: newNotes })
    // notes = notes.filter(note => !note.id)
    // console.log(notes)
    // this.setState({ notes: notes })
    // this.setState({ id: this.state.id-1})
    // let num = this.state.id
    // if (num > -1) {
    //   --num
    // }
    // this.setState({ id: num })

    console.log(`State id is ${this.state.id}`)
  }

  editSubmit = e => {
    e.preventDefault()
    let notes = this.state.notes.slice()
    // notes.forEach(notes => note[this.state.id] == note[this.state.clicked] ? note.noteText = this.state.editText note.noteName = this.state.editName : null)
    notes[this.state.clicked].noteName = this.state.editName
    notes[this.state.clicked].noteText = this.state.editText

    this.setState({notes: notes, editName: '', editText: ''})
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
