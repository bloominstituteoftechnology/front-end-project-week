import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";

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
        <Route exact path="/" component={HomeView} />
        <Route exact patch="/notes" component={NotesView} />
        <Route path="/notes/:notesId" component={NoteView} />
        <Route path="/note-form" component={NoteFormView} />
      </div>
    );
  }
}

export default App;
