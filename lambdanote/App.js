import React, { Component } from 'react';
import Note from './Components/Note.js';
import NoteForm from './Components/NoteForm.js';
import NoteList from './Components/NoteList.js';
import Navbar from './Components/Navbar.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }
  render() {
    return (
      <div className="App">
        <NoteList notes={this.state.notes}/>
        <Navbar />
      </div>
    );
  }
}

export default App;
