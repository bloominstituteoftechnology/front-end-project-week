import React, { Component } from 'react';
import './App.css';
import NoteList from '../src/Components/NoteList';
import Menu from '../src/Components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <NoteList />
      </div>
    );
  }
}

export default App;
