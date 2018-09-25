import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Note from './components/Note';
import NotesList from './components/NotesList';
import NotesMenu from './components/NotesMenu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      noteTitle: '',
      noteText: '',
      id: null
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  publishNote = () => {
    let single = this.state.notes[this.state.notes.length - 1].id;
    this.setState({ id: single }, () => {
      let notes = this.state.notes.slice();
      let id = this.state.id;
      if (this.state.singletitle !== '' || this.state.singlebody !== '') { /* checking to make sure that at least one field has input */
        id++;
        notes.push({ id: id, title: this.state.singletitle, text: this.state.singlebody });
        this.setState({ notes, singletitle: '', singlebody: '', id }); /* reset state to allow for new note input */
      }
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Notes App - Placeholder</h1>
        </header>
      </div>
    );
  }
}

export default App;
