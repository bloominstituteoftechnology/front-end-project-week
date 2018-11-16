import React, { Component } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lambda Notes</h1>
        <CreateNote />
        <NoteList />
      </div>
    );
  }
}

export default App;
