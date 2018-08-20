import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import Modal from './components/Modal';

class App extends Component {
  dummyText = 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis.';
  state = {
    notes: [
      {
        id: 0,
        title: 'Note title',
        text: this.dummyText
      },
      {
        id: 1,
        title: 'Note title',
        text: this.dummyText
      },
      {
        id: 2,
        title: 'Note title',
        text: this.dummyText
      }
    ],
    title: '',
    text: '',
    modal: false,
    nextId: 3
  };

  storeNote = (note) => {
    this.setState({ note });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNote = e => {
    e.preventDefault();
    const { notes, title, text, nextId } = this.state;
    this.setState({
      notes: [...notes, {
        id: nextId,
        title,
        text
      }],
      title: '',
      text: '',
      nextId: nextId + 1
    });
  };

  editNote = e => {
    e.preventDefault();
    const { notes, title, text, note } = this.state;
    this.setState({
      notes: notes.map(n => n.id === note.id ? {...n, title, text} : n),
      title: '',
      text: ''
    });
  };

  deleteNote = () => {
    const { notes, note } = this.state;
    this.toggle();
    this.setState({
      notes: notes.filter(n => n.id !== note.id)
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <Link to="/">View Your Notes</Link>
          &emsp;
          <Link to="/create">+ Create New Note</Link>
        </div>
        <Route
          path="/create"
          render={() => (
            <div>
              <h2>Create New Note:</h2>
              <NoteForm 
                onChange={this.onChange} 
                onSubmit={this.addNote} 
                title={this.state.title} 
                text={this.state.text} 
                formText="Save"
              />
            </div>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h2>Your Notes:</h2>
              {this.state.notes.map(note => (
                <Link 
                  key={note.id} 
                  onClick={() => this.storeNote(note)} 
                  to={`/notes/${note.id}`}
                >
                  <Note note={note} />
                </Link>
              ))}
            </div>
          )}
        />
        <Route
          path="/notes/:id"
          render={() => (
            <div>
              <Link to="/notes/edit">edit</Link>
              &emsp;
              <Link to="/notes/delete" onClick={this.toggle}>delete</Link>
              <Note note={this.state.note} />
            </div>
          )}
        />
        <Route
          path="/notes/edit"
          render={() => (
            <div>
              <h2>Edit Note:</h2>
              <NoteForm
                onChange={this.onChange} 
                onSubmit={this.editNote} 
                title={this.state.title} 
                text={this.state.text} 
                formText="Update"
              />
            </div>
          )}
        />
        <Route
          path="/notes/delete"
          render={() => (
            <Modal
              toggle={this.toggle}
              modal={this.state.modal}
              delete={this.deleteNote}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
