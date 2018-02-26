import React, { Component } from 'react';
import './css/App.css';
import dummyData from './dummy-data';
import NoteContainer from "./components/NoteContainer/NoteContainer";

class App extends Component {

  constructor() {
    super();
    this.state = {
      notes: dummyData
    };
  }

  render() {
    return (
      <div className="App">
          {this.state.notes.map((note, i) => {
            return (
              <NoteContainer key={i} noteTitle={note.noteTitle} noteContent={note.noteContent} />
            );
          })}
      </div>
    );
  }
}

export default App;
