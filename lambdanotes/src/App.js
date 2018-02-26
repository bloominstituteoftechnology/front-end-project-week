import React, { Component } from 'react';
import './css/App.css';
import dummyData from './dummy-data';

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
              <p key={i}>{note.noteTitle} & {note.noteContent}</p>
            );
          })}
      </div>
    );
  }
}

export default App;
