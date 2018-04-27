import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteList from './components/NoteList.js';
import Navigation from './components/Navigation.js';
import { ListView, CreateNew } from './components';
import { Route } from 'react-router-dom';
import { notes } from './NotesArray.js';

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

  Navi = () => (
    <div>
  
      <Navigation />
      <Route path="/ListView" component={ ListView }/>
      <Route exact path="/CreateNew"
          render = {(props) => <CreateNew remove={this.handleRemoveNote} 
          change={this.handleNoteChange} 
          add={this.handleAddNote} 
          notes={this.state.noteList} 
          {...props} />} 
          />
      {/* <Route exact path="/" component={ ListView }/> */}
      {/* <Route path="/CreateNew" component={ CreateNew }/> */}
  
    </div>
  );

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
          { this.Navi() }
          { this.ListView() }
      </div>
    );
  }
}



export default App;