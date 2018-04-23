import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteList from './components/NoteList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      noteList: [],
      note: ''
    };

    this.handleNoteChange = this.handleNoteChange.bind(this);

    this.handleAddNote = this.handleAddNote.bind(this);

    this.handleRemoveNote = this.handleRemoveNote.bind(this);

  }

  handleRemoveNote(noteId) {
    const noteList = this.state.noteList;
    noteList.forEach((note, i) => {
      if (note.id === noteId) {
        noteList.splice(i, 1);
      }
    });
    this.setState({ noteList });
  }

  handleNoteChange(event) {
    this.setState({ note: event.target.value });
  }

  handleAddNote() {
    const note = { id: this.state.noteList.length };
    note['title'] = this.state.note;
    const noteList = this.state.noteList;
    noteList.push(note);
    this.setState({ noteList, note: '' });
  }

  render() {
    return (

      <div>
        <input
          type="text"
          value={this.state.note}
          onChange={this.handleNoteChange}
        />

        <button onClick={this.handleAddNote}>Submit Note</button>
        <NoteList
          removeNote={this.handleRemoveNote}
          noteList={this.state.noteList}
        />

      </div>

    );

  }

}



export default App;