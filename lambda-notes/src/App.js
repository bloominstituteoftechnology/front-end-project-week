import React, { Component } from 'react';

import NotesList from './components/notesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotesList />
      </div>
    );
  }
}

export default App;
