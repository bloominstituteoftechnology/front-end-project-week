import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import NotesList from './components/NotesList';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
            <Sidebar />
            <NotesList />
        </div>

      </div>
    );
  }
}

export default App;
