import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MenuBar } from './components/universal/MenuBar';
import { Notes } from './components/notes-page/Notes';
import { NotePage } from './components/single-note-page/NotePage';
import NewNote from './components/new-note-page/NewNote';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import axios from 'axios';

const AppContainer = styled.div `
  display: flex;
  max-width: 890px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid black;
`;

class App extends Component {
  constructor (props) {
    super(props);
    this.state= {
      notes: [],
      newTitle: '',
      newNote: '',
      newTags: '',
      modal: false,
      editing: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8700/notes').then(response => {
      this.setState({ notes: response.data });
    }).catch(err => {
      console.error(err);
    })
  }

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  deleteNoteHandler = (id) => {
    const noteId = parseInt(id);
    axios.delete(`http://localhost:8700/notes/${noteId}`).then(response => {
      axios.get('http://localhost:8700/notes').then(resp2 => {
        this.setState({ notes: resp2.data, modal: false })
      }).catch(err => {
        console.error(err);
      })
    }).catch(err => {
      console.error(err);
    })
  }

  addNewNoteHandler = (props) => {
    const myNewNote = {
      title: this.state.newTitle,
      note: this.state.newNote,
    };
    axios.post('http://localhost:8700/notes', myNewNote).then(response => {
      axios.get('http://localhost:8700/notes').then(resp2 => {
        this.setState({ notes: resp2.data, newTitle: '', newNote: '' })
      }).catch(err => {
        console.error(err);
      })
    }).catch(err => {
      console.error(err);
    });
  }

  beginEditNoteHandler = (id) => {
    const noteId = parseInt(id);
    const dummyNotes = this.state.notes;
    let selectedNote = dummyNotes.find(note => note.id === noteId);
    this.setState({ newTitle: selectedNote.title, newNote: selectedNote.note, editing: true })
  }

  submitEditedNote = (id) => {
    const noteId = parseInt(id);

    axios.get(`http://localhost:8700/notes/${noteId}`).then(note => {
      let selectedNote = note.data;
      selectedNote.title = this.state.newTitle;
      selectedNote.note = this.state.newNote;
      selectedNote.editing = false;
      axios.put(`http://localhost:8700/notes/${noteId}`, selectedNote).then(response => {
        axios.get('http://localhost:8700/notes').then(res2 => {
          this.setState({ newTitle: '', newNote: '', notes: res2.data, editing: false })
        }).catch(err => {
          console.error(err);
        })
      }).catch(err => {
        console.error(err);
      })
    }).catch(err => {
      console.error(err);
    })
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <AppContainer className="App">
        <Route path='/' component={MenuBar} />
        <Route exact path='/' render={() =>
          this.state.notes.length === 0 ? <h1>Add a note!</h1>
          : <Notes notes={this.state.notes} />
        } />
        <Route path='/notes/:id' render={(props) => <NotePage {...props} editComplete={this.submitEditedNote} editStart={this.beginEditNoteHandler} change={this.onChangeHandler} notes={this.state.notes} delete={this.deleteNoteHandler} title={this.state.newTitle} note={this.state.newNote} toggle={this.toggle} modal={this.state.modal} editing={this.state.editing} />} />
        <Route path='/new-note' render={(props) => <NewNote {...props} addNote={this.addNewNoteHandler} title={this.state.newTitle} note={this.state.newNote} change={this.onChangeHandler} />} />
      </AppContainer>
    );
  }
}

export default App;
