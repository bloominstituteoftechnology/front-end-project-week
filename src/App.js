import React from 'react';
import { NotesList, Note, NoteForm } from './components';
import { Route, NavLink, withRouter, Switch } from 'react-router-dom';
import ReactModal from 'react-modal';
import axios from 'axios';

import './components/ComponentStyle.css';

import './App.css';

const serverURL = 'https://heronotesmwright.herokuapp.com';

const blankNoteForm = {
  title: '',
  body: ''
};

ReactModal.setAppElement('#root');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notesData: [],
      note: {
        tags: ['tag', 'otherTag'],
        title: '',
        body: ''
      },
      isUpdating: false,
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal = () => {
    console.log('fired');
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    this.fetchNotes();
  }
  fetchNotes = () => {
    axios
      .get(`${serverURL}/api/notes`)
      .then(response => {
        console.log(response);
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
    axios.post(`${serverURL}/api/notes`, this.state.note).then(response => {
      let newNote = this.state.note;
      newNote.id = response.data.id;
      this.setState({
        notesData: [...this.state.notesData, newNote],
        note: blankNoteForm
      });
    });
  };

  handleDeleteNote = noteId => {
    axios
      .delete(`${serverURL}/api/notes/${noteId}`)
      .then(response => {
        const filteredNotes = this.state.notesData.filter(
          note => note.id !== noteId
        );
        this.setState({ notesData: filteredNotes });
      })
      .catch(err => {
        console.log(err);
      });
  };

  goToUpdateNoteForm = note => {
    this.setState(
      {
        note,
        isUpdating: true
      },
      () => console.log(this.state.isUpdating)
    );
    this.props.history.push('/note-form');
  };

  handleUpdateNote = noteId => {
    console.log('this has launched');
    axios
      .put(`${serverURL}/api/notes/${noteId}`, this.state.note)
      .then(response => {
        console.log('response', response);
        const updatedNotes = this.state.notesData.map(note => {
          console.log(note.id, response.data.id, note.id == response.data.id);
          if (note.id == response.data.id) {
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
                handleOpenModal={this.handleOpenModal}
                handleCloseModal={this.handleCloseModal}
                goToUpdateNoteForm={this.goToUpdateNoteForm}
                showModal={this.state.showModal}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
