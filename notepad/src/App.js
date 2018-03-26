import React, { Component } from 'react';
import './App.css';
import NotesList from './Components/notesList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Notes</h1>
        <NotesList />
      </div>
    );
  }
}

export default App;
