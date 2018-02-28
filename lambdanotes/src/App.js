// dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Sidebar from './components/sidebar';
import NotesList from './components/notes-list';
import CreateNote from './components/create-note';
import NoteDetails from './components/note-details';
import EditNote from './components/edit-note';

import dummyData from './dummy-data';

import './App.css';

// Styles for App Component
const AppStyled = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  height: 100vh;
  vertical-align: top;
`

// App Component
class App extends Component {
  state = {
    viewingNotes: true,
    creatingNote: false,
    editingNote: false,
    showingNoteDetails: false,
    notes: dummyData,
    noteDetails: {
      title: '',
      content: '',
      id: '',
    }
  }

  // Display Notes List when Sidebar button is clicked
  viewNotes = () => {
    this.setState({ viewingNotes: true, creatingNote: false, showingNoteDetails: false, editingNote: false, });
  }

  // Display Create New Note entry form when Sidebar button is clicked
  createNewNoteForm = () => {
    this.setState({ viewingNotes: false, creatingNote: true, showingNoteDetails: false, editingNote: false });
  }

  // Display Note Details when note is clicked on in Note List
  showNoteDetails = (id) => {
    const noteToView = this.state.notes.find((note) => { return note.id === id })
    this.setState({
      viewingNotes: false,
      creatingNote: false,
      showingNoteDetails: true,
      editingNote: false,
      noteDetails: { ...noteToView },
    });
  }

  // Display Note Edit Form when 'edit' is clicked in Note Details
  showNoteEditForm = () => {
    this.setState({ viewingNotes: false, creatingNote: false, showingNoteDetails: false, editingNote: true });
  }

  // Create new note object with data from CreateNote;
  // Add new note object to notes array and switch view back to notes list
  saveNewNote = (note) => {
    let prevNotes = this.state.notes;
    this.setState({
      notes: [...prevNotes, note],
      viewingNotes: true,
      creatingNote: false,
      editingNote: false,
    })
  }

  // Get id of last note and return new incremented id 
  getNextId = () => {
    let lastNoteIndex = this.state.notes.length - 1;
    let lastNote = this.state.notes[lastNoteIndex];
    let nextId = lastNote.id + 1;
    return nextId;
  }

  render() {
    return (
      <AppStyled>
        <Sidebar
          viewingNotes={this.state.viewingNotes}
          creatingNote={this.state.creatingNote}
          editingNote={this.state.editingNote}
          viewNotes={this.viewNotes}
          createNewNoteForm={this.createNewNoteForm}
          style={{ width: "200px", height: "100vh" }}
        />
        <div style={{ width: "100%", height: "100vh" }}>
          {this.state.viewingNotes && <NotesList notes={this.state.notes} showNoteDetails={this.showNoteDetails} />}
          {this.state.creatingNote && <CreateNote getNextId={this.getNextId} saveNewNote={this.saveNewNote} />}
          {this.state.showingNoteDetails && <NoteDetails noteDetails={this.state.noteDetails} showNoteEditForm={this.showNoteEditForm} />}
          {this.state.editingNote && <EditNote noteDetails={this.state.noteDetails} />}
        </div>
      </AppStyled>
    );
  }
} // App Component

export default App;
