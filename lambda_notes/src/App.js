import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Notesidebar from './container/Notesidebar.js';
import NoteList from './container/components/NoteList.js';
import CreateNote from './container/components/CreateNote.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notesList:[]
    }
  }

  addToNoteList = Note => {
    const savedist = this.state.noteList
  }

  render() {
    return (
      <div className="App">
        <Notesidebar addData={this.addToNoteList}/>
      </div>
    );
  }
}

export default App;
