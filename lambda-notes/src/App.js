import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NoteList from './components/noteList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Lambda Notes</h1>
        <NoteList />
      </div>
    );
  }
}

export default App;
