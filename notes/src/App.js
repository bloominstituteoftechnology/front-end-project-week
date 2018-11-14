import React, { Component } from 'react';
import './App.css';
import NoteList from '../src/Components/NoteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World!
        <NoteList />
      </div>
    );
  }
}

export default App;
