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

const AppStyled = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  border: 2px solid black;
  height: 100%;
`

class App extends Component {
  state = {
    notes: dummyData,
    viewingNotes: true,
    creatingNote: false,
    editingNote: false,
  }

  viewNotes = () => {
    this.setState({ viewingNotes: true, creatingNote: false, editingNote: false })
    console.log(this.state)
  }

  createNewNote = () => {
    this.setState({ viewingNotes: false, creatingNote: true, editingNote: false })
    console.log(this.state)
  }


  render() {
    return (
      <AppStyled>
        <Sidebar
          viewingNotes={this.state.viewingNotes}
          creatingNote={this.state.creatingNote}
          editingNote={this.state.editingNote}
          viewNotes={this.viewNotes}
          createNewNote={this.createNewNote}
          style={{ width: "200px", height: "100%" }}
        />
        <div style={{ width: "100%" }}>
          {this.state.viewingNotes && <NotesList notes={this.state.notes} />}
          {this.state.creatingNote && <CreateNote />}
        </div>
      </AppStyled>
    );
  }
} // App Component

export default App;
