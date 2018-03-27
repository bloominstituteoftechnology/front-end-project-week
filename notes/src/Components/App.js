import React, { Component } from 'react';
import './App.css';
import NewNote from './NewNote';
import NotesList from './NotesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Notes</p>
        <NewNote />
        <NotesList />
      </div>
    );
  }
}

export default App;
