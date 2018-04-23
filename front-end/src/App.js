import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SideMenu from './components/SideMenu'
import NoteList from './components/NoteList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedNotes: [],
      showNoteList: true,
      showCreateNote: false,
      showEditNote: false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>List View</h1>
        </header>

        <body className="PageContainer">
          <SideMenu />
          <NoteList />
        </body>

      </div>
    );
  }
}

export default App;
