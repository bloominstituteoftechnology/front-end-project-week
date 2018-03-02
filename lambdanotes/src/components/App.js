import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import NoteList from './NoteList';
import CreateNote from './CreateNote';
import NoteView from './NoteView';
import EditNote from './EditNote';

import './App.css';


export default class App extends React.Component {
  nextId = 0;
  noteIndex = 0;

  state = {
    notes: [],
  };

  handleNoteViewIndex = inputId => {
    for (let i = 0; i < this.state.notes.length; i++) {
      if (this.state.notes[i].id === inputId) this.noteIndex = i;
    };
  };

  handleCreateNote = inputNote => {
    const newNote = {
      id: this.nextId++,
      title: inputNote.title,
      body: inputNote.body,
    };
    const newNotes = [...this.state.notes, newNote];
    this.setState({
      notes: newNotes,
    });
  };

  handleEditNote = inputNote => {
    const editedNote = {
      id: inputNote.id,
      title: inputNote.title,
      body: inputNote.body,
    };
    const editedNotes = [...this.state.notes];
    editedNotes.splice(this.noteIndex, 1, editedNote);
    this.setState({
      notes: editedNotes,
    });
  };

  handleDeleteNote = inputId => {
    const lessNotes = this.state.notes.filter(note => note.id !== inputId);
    this.setState({
      notes: lessNotes,
    });
  };

  updateSortedNotes = sortedNotes => {
    this.setState({
      notes: sortedNotes,
    });
  };


  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Route exact path={"/"} render={() => <NoteList notes={this.state.notes} handleNoteViewIndex={this.handleNoteViewIndex} updateSortedNotes={this.updateSortedNotes}/>} />
          <Route exact path={"/create"} render={() => <CreateNote createNote={this.handleCreateNote} />} />
          <Route exact path={"/view"} render={() => <NoteView note={this.state.notes[this.noteIndex]} toggleModal={this.toggleModal} handleDeleteNote={this.handleDeleteNote} />} />
          <Route exact path={"/edit"} render={() => <EditNote note={this.state.notes[this.noteIndex]} handleEditNote={this.handleEditNote} />} />
        </div>
      </Router>
    );
  };
}
