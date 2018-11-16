import React, { Component } from 'react';
import './App.css';
import NoteList from './components/NoteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lambda Notes</h1>
        <NoteList />
      </div>
    );
  }
}

export default App;
