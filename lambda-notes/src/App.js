import React, { Component } from 'react';

import './App.css';
import NotesList from './src/components/Notes/NotesList';

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
