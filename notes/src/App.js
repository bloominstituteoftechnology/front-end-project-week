import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Note from './components/Note';
import NotesList from './components/NotesList';
import NotesMenu from './components/NotesMenu';

class App extends Component {
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
