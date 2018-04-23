//IMPORTS
import React, { Component } from 'react';
import './App.css';
import NoteList from './components/NoteList.js';

class App extends Component {
  render() {
    return (
      <div className="App fluid-container">
        <NoteList />
      </div>
    );
  }
}

export default App;
