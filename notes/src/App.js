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
      tags: [],
      deleteModalToggle: false,
      selectedNoteID: null
    };
  }

  addNote = note => {
    axios
      .post(`http://localhost:8000/api/notes`, note)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log("Error adding new note");
      });
  };

  updateNote = note => {
    axios
      .put(`http://localhost:8000/api/notes/${note.id}`, note)
      .then(response => {})
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
      .delete(`http://localhost:8000/api/notes/${this.state.selectedNoteID}`)
      .then(response => {
        console.log(response + " deleted successfully");
        this.setState({ deleteModalToggle: false });
      })
      .catch(err => {
        console.log("Error deleting note");
      });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Sidebar />
          <div className="notes-view">
            <Route exact path="/" component={ListView} />
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
