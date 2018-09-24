import React, { Component } from 'react';
import './App.css';

import NotesList from './components/NotesList';

class App extends Component {
  state = {
    tags: [],
    title: '',
    textBody: ''
  }
  render() {
    return (
      <div className="App">
        <header className="sidebar">
          <h1 className="App-title">Lambda Notes</h1>
        </header>
        <div>
          <NotesList />

        </div>

      </div>
    );
  }
}

export default App;
