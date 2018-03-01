// dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Sidebar from './components/sidebar';
import NotesList from './components/notes-list';
import CreateNote from './components/create-note';
import NoteDetails from './components/note-details';
import EditNote from './components/edit-note';
import DeleteModal from './components/delete-modal';

import dummyData from './dummy-data';

import './App.css';

// Styles for App Component
const AppStyled = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  height: 100%;
`;

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
    this.setState({
      viewingNotes: true,
      creatingNote: false,
      showingNoteDetails: false,
      editingNote: false,
      deletingNote: false,
    });
  }

  // Display Create New Note entry form when Sidebar button is clicked
  createNewNoteForm = () => {
    this.setState({
      viewingNotes: false,
      creatingNote: true,
      showingNoteDetails: false,
      editingNote: false,
      deletingNote: false,
    });
  }

  // Display Note Details when note is clicked on in Note List
  showNoteDetails = (id) => {
    const noteToView = this.state.notes.find(note => note.id === id);
    this.setState({
      viewingNotes: false,
      creatingNote: false,
      showingNoteDetails: true,
      editingNote: false,
      deletingNote: false,
      noteDetails: { ...noteToView },
    });
  }

  // Display Note Edit Form when 'edit' is clicked in Note Details
  showNoteEditForm = () => {
    this.setState({
      viewingNotes: false,
      creatingNote: false,
      showingNoteDetails: false,
      editingNote: true,
      deletingNote: false,
    });
  }

  showDeleteModal = () => {
    this.setState({
      deletingNote: true,
    })
  }

  closeDeleteModal = () => {
    this.setState({
      deletingNote: false,
    })
  }

  // Create new note object with data from CreateNote;
  // Add new note object to notes array and switch view back to notes list
  saveNewNote = (note) => {
    let prevNotes = this.state.notes;
    this.setState({ notes: [...prevNotes, note] })
    this.viewNotes();
  }

  // Update note data and return to Notes List view
  updateNote = (updatedNote) => {
    let { title, content, id } = updatedNote;
    let updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.title = title;
        note.content = content;
      }
      return note
    })
    this.setState({ notes: updatedNotes, noteDetails: updatedNote });
    this.showNoteDetails(id);
  }

  // Get id of last note and return new incremented id 
  getNextId = () => {
    let lastNoteIndex = this.state.notes.length - 1;
    let lastNote = this.state.notes[lastNoteIndex];
    let nextId = lastNote.id + 1;
    return nextId;
  }

  // Delete Note from notes array and return to Notes List view
  deleteNote = () => {
    let updatedNotes = this.state.notes.filter(note => note.id !== this.state.noteDetails.id);
    this.setState({ notes: updatedNotes });
    this.viewNotes();
  }

  render() {
    return (
      <AppStyled>
        <Sidebar
          viewNotes={this.viewNotes}
          createNewNoteForm={this.createNewNoteForm}
          style={{ width: "200px", height: "100vh", padding: "0" }}
        />

        <div style={{ width: "100%", height: "100%" }}>
          {this.state.viewingNotes &&
            <NotesList
              notes={this.state.notes}
              showNoteDetails={this.showNoteDetails}
            />}

          {this.state.creatingNote &&
            <CreateNote
              getNextId={this.getNextId}
              saveNewNote={this.saveNewNote}
            />}

          {this.state.showingNoteDetails &&
            <NoteDetails
              noteDetails={this.state.noteDetails}
              showNoteEditForm={this.showNoteEditForm}
              showDeleteModal={this.showDeleteModal}
              style={{ padding: "0" }}
            />}

          {this.state.editingNote &&
            <EditNote
              noteDetails={this.state.noteDetails}
              updateNote={this.updateNote}
              showNoteEditForm={this.showNoteEditForm}
            />}
        </div>
        {this.state.deletingNote &&
          <DeleteModal
            deleteNote={this.deleteNote}
            closeDeleteModal={this.closeDeleteModal}
          />}
      </AppStyled>
    );
  }
} // App Component

export default App;
