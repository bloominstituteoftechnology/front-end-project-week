import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import NotesList from '../NotesList/NotesList';
import './App.css';

class App extends Component {
  state = {
    notes: ['note1', 'note2', 'note3'],
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <h2>Your Notes: </h2>
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
