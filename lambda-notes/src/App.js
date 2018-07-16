import React, { Component } from 'react';
import './App.css';
import NoteList from './Components/NoteList/notelist';

class App extends Component {
  render() {
    return (
      <div>
        <NoteList />
      </div>
    );
  }
}

export default App;
