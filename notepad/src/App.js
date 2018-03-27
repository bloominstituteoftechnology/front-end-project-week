import React, { Component } from 'react';
import './App.css';
import NotesList from './Components/notesList.js';
import NoteForm from './Components/NoteForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Notes</h1>
        <NotesList />
        <NoteForm />
      </div>
    );
  }
}

export default App;
