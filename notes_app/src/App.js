import React, { Component } from 'react';
import './App.css';
import NoteList from './components/noteList';
import noteList from './components/noteList.css';

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

