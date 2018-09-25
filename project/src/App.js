import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import NotesListView from "./views/NotesListView";
import NoteView from "./views/NoteView";
import NotesFormView from "./views/NotesFormView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/notes">
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/note-form">
              Add Note
            </NavLink>
          </li>
        </ul>
        <Route exact patch="/notes" component={NotesListView} />
        <Route path="/notes/:notesId" component={NoteView} />
        <Route path="/note-form" component={NotesFormView} />
      </div>
    );
  }
}

export default App;
