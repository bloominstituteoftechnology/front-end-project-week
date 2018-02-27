import React, { Component } from 'react';

import './App.css';

import NoteInput from './components/NoteInput';
import NoteItem from './components/NoteItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {id:0, text:"The universe is change; our life is what our thoughts make of it."},
        {id:1, text:"The art of living is more like wrestling than dancing."},
        {id:2, text:"When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love."},
        {id:3, text:"You have power over your mind - not outside events. Realize this, and you will find strength."},
      ],
      nextId: 4
    }

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    }

    addNote(noteText) {
      let notes = this.state.notes.slice();
      notes.push({id: this.state.nextId, text: noteText});
      this.setState({
        notes: notes,
      })
    }
    removeNote(id) {
      this.setState({
        notes: this.state.notes.filter((notes, index) => notes.id !== id)
      })
    }

    render() {
      return (
        <div className="App">
        <div className="note-wrapper">

        <NoteInput NoteText="" addNote={this.addNote}/>
        <ul>
          {
            this.state.notes.map((Notes) => {
              return < NoteItem Notes={Notes} key={Notes.id} id={Notes.id} removeNote={this.removeNote}/>
            })
          }
          </ul>
          </div>
          </div>
      );
    }
  }


export default App;