// dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Sidebar from './components/sidebar';
import NotesList from './components/notes-list';
import dummyData from './dummy-data';
import CreateNote from './components/create-note';

// CSS
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
    notes: dummyData,
    viewingNotes: true,
    creatingNote: false,
    editingNote: false,
  }

  // Display Notes List when Sidebar button is clicked
  viewNotes = () => {
    this.setState({ viewingNotes: true, creatingNote: false, editingNote: false })
  }

  // Display Create New Note entry form when Sidebar button is clicked
  createNewNoteForm = () => {
    this.setState({ viewingNotes: false, creatingNote: true, editingNote: false })
  }

  saveNewNote = (note) => {
    let prevNotes = this.state.notes;
    this.setState({
      notes: [...prevNotes, note],
      viewingNotes: true,
      creatingNote: false,
      editingNote: false,
    })
    console.log(this.state.notes);
  }

  // Get's id of last note and returns new incremented id 
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
          {this.state.viewingNotes && <NotesList notes={this.state.notes} />}
          {this.state.creatingNote && <CreateNote getNextId={this.getNextId} saveNewNote={this.saveNewNote} />}
        </div>
      </AppStyled>
    );
  }
} // App Component

export default App;
