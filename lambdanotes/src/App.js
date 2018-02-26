import React, { Component } from 'react';
import './css/App.css';
import dummyData from './dummy-data';
import NoteContainer from './components/NoteContainer/NoteContainer';
import Panel from './components/Panel/Panel';
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
          <Panel />
        <div className="Notes">
          {this.state.notes.map((note, i) => {
            return (
              <NoteContainer key={i} noteTitle={note.noteTitle} noteContent={note.noteContent} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
