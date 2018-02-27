import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import NoteList from './NoteList';
import CreateNote from './CreateNote';
import NoteView from './NoteView';
import EditNote from './EditNote';

export default class App extends React.Component {
  nextId = 0;
  noteIndex = 0;

  state = {
    notes: [],
  };

  handleNoteViewIndex = index => {
    this.noteIndex = index;
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
      id: this.noteIndex,
      title: inputNote.title,
      body: inputNote.body,
    };
    const editedNotes = [...this.state.notes];
    editedNotes.splice(this.noteIndex, 1, editedNote);
    this.setState({
      notes: editedNotes,
    });
  };

  handleDeleteNote = _ => {
    //TODO
  };

  render() {
    return (
      <Router>
        <div className="App">
            <Sidebar />
            <Route exact path={"/"} render={() => <NoteList notes={this.state.notes} handleNoteViewIndex={this.handleNoteViewIndex} />} />
            <Route exact path={"/create"} render={() => <CreateNote createNote={this.handleCreateNote} />} />
            <Route exact path={"/view"} render={() => <NoteView note={this.state.notes[this.noteIndex]} />} />
            <Route exact path={"/edit"} render={() => <EditNote note={this.state.notes[this.noteIndex]} handleNoteViewIndex={this.handleNoteViewIndex} handleEditNote={this.handleEditNote} />} />
        </div>
      </Router>
    );
  };
}
