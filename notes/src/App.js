import React, { Component } from 'react';

import './App.css';
import NoteList from './NoteList';

class App extends Component {
  render() {
    return (
      <div className="App">
        I am the App
        <NoteList />
      </div>
    );
  }
}

export default App;
