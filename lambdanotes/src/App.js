import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { v4 } from 'uuid';

import { notes } from './notes.js';
import Sidebar from './components/Sidebar.js';
import Notes from './components/Notes.js';
import CreateNoteForm from './components/CreateNoteForm.js';
import SingleNote from './components/SingleNote.js';
import EditNoteForm from './components/EditNoteForm.js';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 893px;
  max-width: 100%;
`
const Heading = styled.h1`
  color: #000;
  font-size: 2.2em;
  margin-top: 9px;
  line-height: 1.1;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Rule = styled.hr`
  margin-top: 0;
`;

const Main = styled.div`
  display: flex;
  width: 99.5%;
  margin-top: 13px;
  border: 1px solid;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    if(localStorage.getItem('notes')) {
      this.setState({ notes: JSON.parse(localStorage.getItem('notes'))});
    }
    else {
      this.setState({ notes: notes });
    }
  }

  /*takes notes from state and sets them in local memory as notes
  */

  // persistNotes() {
  //   const { notes }  = this.state;
  //   localStorage.setItem('notes', JSON.stringify(notes));
  // }

  addNote = note => {
    note = { ...note, id: v4() };
    // console.log('note', note);
    // const notes = this.state.notes;
    // notes.concat([note]);
    // console.log('notes', notes);
    // this.persistNotes();
    this.setState({ notes: [...this.state.notes, note] });
  };

  deleteNote = id => {
    // const notes = Object.assign([], this.state.notes);
    // notes.filter(note => note.id !== id);
    // notes.splice(id, 1);
    // localStorage.setItem('notes', JSON.stringify(notes));
    this.setState({ notes: this.state.notes.filter(note => note.id !== id) });
  }

  updateNote = (updatedNote, id) => {
    const updatedNotes = this.state.notes.map(note => {
      if(note.id === id) {
        return { title: updatedNote.title, text: updatedNote.text, id: updatedNote.id }
      }
      else {
        return note;
      }
    });
    this.setState({ notes: updatedNotes });
  }

  render() {
    return (
      <Wrapper>
        <Heading>List View</Heading>
        <Rule />
        <Main>
          <Sidebar />
          <Route
            exact
            path="/notes"
            render={() => <Notes notes={this.state.notes} />}
          />
          <Route
            exact
            path="/createNote"
            render={(props) => <CreateNoteForm {...props} addNote={this.addNote} />}
          />
          <Route
            exact
            path="/notes/:id"
            render={(props) => <SingleNote {...props} notes={this.state.notes} deleteNote={this.deleteNote} />}
          />
          <Route
            exact
            path="/edit/:id"
            render={(props) => <EditNoteForm {...props} notes={this.state.notes} updateNote={this.updateNote} />}
          />
        </Main>
      </Wrapper>
    );
  }
}

export default App;
