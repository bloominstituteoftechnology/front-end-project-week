import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './components/Sidebar/Sidebar';
import ListView from './components/NotesView/ListView';
import NewNote from './components/NotesView/NewNote';
import Note from './components/NotesView/Note';
import Edit from './components/NotesView/Edit';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      tags: [],
      activeTag: 'all',
      sortedNotes: [],
      deleteModalToggle: false,
      selectedNoteID: null
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios
      .get(`https://lambda-notes-jp.herokuapp.com/api/notes`)
      .then(response => {
        console.log(response.data);
        let tags = '';
        let filteredTags = '';

        response.data.forEach(note => {
          tags += note.tags + ',';
        });

        tags = tags.slice(0, tags.length - 1);
        tags = tags.split(',');

        filteredTags = tags.filter((tag, index) => {
          return tags.indexOf(tag) === index;
        });

        this.setState({
          notes: response.data,
          sortedNotes: response.data,
          tags: ['all', ...filteredTags]
        });
      })
      .catch(err => {
        console.log('Error retrieving notes');
      });
  }

  tagSelectHandler = event => {
    let sortedNotes = this.state.notes.slice();
    if (event.target.dataset.tag !== 'all') {
      sortedNotes = sortedNotes.filter(note =>
        note.tags.includes(event.target.dataset.tag)
      );
      console.log(sortedNotes);
      this.setState({
        activeTag: event.target.dataset.tag,
        sortedNotes: sortedNotes
      });
    } else {
      this.setState({
        activeTag: event.target.dataset.tag,
        sortedNotes: this.state.notes
      });
    }
  };

  addNote = newNote => {
    axios
      .post(`https://lambda-notes-jp.herokuapp.com/api/notes`, newNote)
      .then(response => {
        console.log(response);
        let tags = '';
        let filteredTags = '';
        let notes = [];

        this.state.notes.forEach(note => {
          notes.push({ ...note });
        });

        notes.push({ id: response.data.id, ...newNote });

        console.log(notes);
        notes.forEach(note => {
          tags += note.tags + ',';
        });

        tags = tags.slice(0, tags.length - 1);
        tags = tags.split(',');

        filteredTags = tags.filter((tag, index) => {
          return tags.indexOf(tag) === index;
        });

        this.setState({
          notes: notes,
          sortedNotes: notes,
          tags: ['all', ...filteredTags]
        });
      })
      .catch(err => {
        console.log('Error adding new note');
      });
  };

  updateNote = note => {
    axios
      .put(`https://lambda-notes-jp.herokuapp.com/api/notes/${note.id}`, note)
      .then(response => {
        console.log(response);
      })
      .catch(err => {});
  };

  deleteToggleHandler = e => {
    this.setState({
      deleteModalToggle: !this.state.deleteModalToggle,
      selectedNoteID: e
    });
  };

  deleteNote = id => {
    axios
      .delete(
        `https://lambda-notes-jp.herokuapp.com/api/notes/${
          this.state.selectedNoteID
        }`
      )
      .then(response => {
        console.log(response + ' deleted successfully');
        this.setState({ deleteModalToggle: false });
        window.location.reload();
      })
      .catch(err => {
        console.log('Error deleting note');
      });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Sidebar />
          <div className="notes-view">
            <Route
              exact
              path="/"
              render={routeProps => (
                <ListView
                  {...routeProps}
                  notes={this.state.notes}
                  tags={this.state.tags}
                  activeTag={this.state.activeTag}
                  sortedNotes={this.state.sortedNotes}
                  tagSelectHandler={this.tagSelectHandler}
                />
              )}
            />
            <Route
              exact
              path="/new-note"
              render={routeProps => (
                <NewNote {...routeProps} addNote={this.addNote} />
              )}
            />
            <Route
              exact
              path="/note/:id"
              render={({ match }) => (
                <Note
                  id={match.params.id}
                  deleteNote={this.deleteToggleHandler}
                />
              )}
            />
            <Route
              path="/note/:id/edit"
              render={({ match }) => (
                <Edit id={match.params.id} updateNote={this.updateNote} />
              )}
            />
          </div>

          <div
            className="delete-modal"
            style={
              this.state.deleteModalToggle
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <div className="modal-box">
              <p>Are you sure you want to delete this?</p>
              <Link
                className="modal-delete-btn"
                to="/"
                onClick={this.deleteNote}
              >
                Delete
              </Link>
              <div
                className="modal-cancel-btn"
                onClick={this.deleteToggleHandler}
              >
                No
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
