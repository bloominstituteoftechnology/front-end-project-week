import React, { Component } from 'react';
import './App.css';

import NoteList from './components/NoteList';

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
