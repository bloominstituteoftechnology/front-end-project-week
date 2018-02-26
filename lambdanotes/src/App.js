import React, { Component } from 'react';
import NoteList from './Components/NoteList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteList />
      </div>
    );
  }
}

export default App;
