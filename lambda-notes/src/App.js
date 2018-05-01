import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteList from './components/noteList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
        </header>
        <NoteList />
      </div>
    );
  }
}

export default App;
