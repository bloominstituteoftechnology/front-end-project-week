import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "./components/Sidebar/Sidebar";
import ListView from "./components/NotesView/ListView";
import NewNote from "./components/NotesView/NewNote";
import Note from "./components/NotesView/Note";
import Edit from "./components/NotesView/Edit";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      tags: ["all", "productivity", "utilities", "personal", "goals", "todo"],
      deleteModalToggle: false,
      selectedNoteID: null
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/notes`)
      .then(response => {
        console.log(response.data);
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log("Error retrieving notes");
      });
  }

  addNote = note => {
    let notes = this.state.notes.slice();
    let tags = this.state.tags.slice();
    console.log(note);
    axios
      .post(`http://localhost:8000/api/notes`, { note })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log("Error adding new note");
      });

    notes = [...this.state.notes, note];
    note.tags.forEach(tag => {
      if (!tags.includes(tag)) tags.push(tag);
    });
    this.setState({ notes: notes, tags: tags });
  };

  updateNote = note => {
    let notes = this.state.notes.slice();
    notes[note.id] = { ...note };
    this.setState({ notes: notes });
  };

  deleteToggleHandler = e => {
    this.setState({
      deleteModalToggle: !this.state.deleteModalToggle,
      selectedNoteID: e
    });
  };

  deleteNote = id => {
    let notes = this.state.notes.slice();
    notes = notes.filter(note => note.id !== this.state.selectedNoteID);
    notes = notes.map((note, index) => ({ ...note, id: index }));
    this.setState({ notes: notes, deleteModalToggle: false });
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
                  note={this.state.notes[match.params.id]}
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
                ? { display: "block" }
                : { display: "none" }
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
