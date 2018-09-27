import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';
import axios from 'axios';
import urlFor from './helpers/urlFor';
import Flash from './components/Flash';

class NoteApp extends Component {
  constructor() {
    super();
    this.state = {
      singleNoteView: true,
      viewNote: true,
      showNote: false,
      notes: [],
      note: {},
      newTag: false,
      error: ''
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote,
      viewNote: true,
      singleNoteView: false,
      note: {}
    })
  }

  toggleHome = () => {
    this.setState({
      viewNote: ! this.state.showNote,
      showNote:  this.state.showNote,
      singleNoteView: false,
      note: {}
    })
  }
  toggleAfterDelete = () => {
    this.setState({
      viewNote: ! this.state.showNote,
      note: {}
    })
  }

  getNotes = () => {
    axios.get(urlFor('notes'))
    .then((res) => this.setState({notes: res.data}) )
    .catch((err) => console.log(err.response.data) );
  }

  getNote = (id) => {
    axios.get(urlFor(`notes/${id}`))
    .then((res) => this.setState({note: res.data, showNote: true }) )
    .catch((err) => console.log(err.response.data) );
  }
  getOneNote = (id) => {
    axios.get(urlFor(`notes/${id}`))
    .then((res) => this.setState({note: res.data, showNote: true }) )
    .catch((err) => console.log(err.response.data) );
  }
  performSubmissionRequest = (data, id) => {
    if (id) {
      return axios.patch(urlFor(`notes/${id}`), data);
    } else {
      return axios.post(urlFor('notes'), data);
    }
  }

  submitNote = (data, id) => {
    this.performSubmissionRequest(data, id)
    .then((res) => this.setState({ showNote: false }) )
    .catch((err) => {
      const { errors } = err.response.data;
      if (errors.content) {
        this.setState({ error: "Missing Note Content!" });
      } else if (errors.title) {
        this.setState({ error: "Missing Note Title!" });
      }
    });
  }

  deleteNote = (id) => {
    const newNotesState = this.state.notes.filter((note) => note.id !== id );
    axios.delete(urlFor(`notes/${id}`) )
    .then((res) => this.setState({ notes: newNotesState }) )
    .catch((err) => console.log(err.response.data) );
  }

  showTagForm = () => {
    this.setState({ newTag: true });
  }

  closeTagForm = () => {
    this.setState({ newTag: false });
  }
  
  submitTag = (data, noteId) => {
    axios.post(urlFor(`notes/${noteId}/tags`), data)
    .then((res) => this.getNote(noteId) )
    .catch((err) => {
      const { errors } = err.response.data;
      if (errors.name) {
        this.setState({ error: "Missing Tag Name!" })
      } else if (errors.title) {

      }
    });
  }

  deleteTag = (noteId, id) => {
    axios.delete(urlFor(`/tags/${id}`))
    .then((res) => this.getNote(noteId) )
    .catch((err) => console.log(err.response.body))
  }

  resetError = () => {
    this.setState({ error: '' });
  }

  render() {
    const { showNote,viewNote,singleNoteView, notes, note, newTag, error } = this.state;

    return (
      <div className="App">
        <Nav 
        toggleNote={this.toggleNote} showNote={showNote}
        toggleHome={this.toggleHome} viewNote={viewNote}
        toggleNoteView={this.toggleNoteView} singleNoteView={singleNoteView}
         />
        {error && <Flash error={error} resetError={this.resetError} />}
        <br />
        { showNote && viewNote?
            <Note
              note={note}
              newTag={newTag}
              submitNote={this.submitNote}
              showTagForm={this.showTagForm}
              closeTagForm={this.closeTagForm}
              submitTag={this.submitTag}
              deleteTag={this.deleteTag}
              deleteNote={this.deleteNote}
            />
            :
            <List 
              getNotes={this.getNotes}
              notes={notes}
              getNote={this.getNote}
              getOneNote={this.getOneNote}
              deleteNote={this.deleteNote}
            />
             }
      </div>
    );
  }
}

export default NoteApp;
