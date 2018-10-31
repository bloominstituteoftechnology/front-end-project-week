import React from 'react';
import { NotesList, Note, NoteForm } from './components';
import { Route, NavLink, withRouter, Switch } from 'react-router-dom';
import axios from 'axios';

import './components/ComponentStyle.css';

import './App.css';

const blankNoteForm = {
  title: '',
  textBody: ''
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notesData: [],
      note: {
        tags: ['tag', 'otherTag'],
        title: '',
        textBody: ''
      },
      isUpdating: false
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }
  fetchNotes = () => {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notesData: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    this.setState({
      note: {
        ...this.state.note,
        [event.target.name]: event.target.value
      }
    });
  };

  handleAddNewNote = () => {
    axios
      .post('https://fe-notes.herokuapp.com/note/create', this.state.note)
      .then(response => {
        let newNote = this.state.note;
        newNote._id = response.data.success;
        this.setState({
          notesData: [...this.state.notesData, newNote],
          note: blankNoteForm
        });
      });
  };

  handleDeleteNote = noteId => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${noteId}`)
      .then(response => {
        const filteredNotes = this.state.notesData.filter(
          note => note._id !== noteId
        );
        this.setState({ notesData: filteredNotes });
      })
      .catch(err => {
        console.log(err);
      });
  };

  goToUpdateNoteForm = note => {
    this.setState({
      note,
      isUpdating: true
    });
    this.props.history.push('/note-form');
  };

  handleUpdateNote = noteId => {
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${noteId}`,
        this.state.note
      )
      .then(response => {
        console.log('response', response);
        const updatedNotes = this.state.notesData.map(note => {
          if (note._id === response.data._id) {
            return response.data;
          } else {
            return note;
          }
        });
        this.setState({
          notesData: updatedNotes,
          isUpdating: false,
          note: blankNoteForm
        });
      });
  };

  render() {
    return (
      <div className="notes-display">
        <div className="sidebar">
          <h1 className="sidebar-title">Lambda Notes</h1>

          <button className="button">
            <NavLink exact to="/">
              View Your Notes
            </NavLink>
          </button>

          <button className="button">
            <NavLink to="/note-form">+ Create New Note</NavLink>
          </button>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <NotesList {...props} notesList={this.state.notesData} />
            )}
          />
          <Route
            path="/note-form"
            render={props => (
              <NoteForm
                {...props}
                notesList={this.state.notesData}
                note={this.state.note}
                handleAddNewNote={this.handleAddNewNote}
                handleChange={this.handleChange}
                handleUpdateNote={this.handleUpdateNote}
                isUpdating={this.state.isUpdating}
              />
            )}
          />
          <Route
            path="/:noteId"
            render={props => (
              <Note
                {...props}
                notesList={this.state.notesData}
                handleDeleteNote={this.handleDeleteNote}
                goToUpdateNoteForm={this.goToUpdateNoteForm}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
