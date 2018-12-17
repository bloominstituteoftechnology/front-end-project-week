import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NoteListView } from './views';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteListView />
      </div>
    );
  }
}

export default App;
