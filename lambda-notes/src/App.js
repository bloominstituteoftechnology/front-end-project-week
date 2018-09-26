import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import axios from "axios";

import HomeView from "./views/HomeView";
import NotesListView from "./views/NotesListView";
import NoteView from "./views/NoteView";
import NoteFormView from "./views/NoteFormView";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink to="/notes" activeClassName="activeNavButton">
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/note-form" activeClassName="activeNavButton">
              Add New Note
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/notes" component={NotesListView} />
        <Route path="/notes/:noteId" component={NoteView} />
        <Route path="/note-form" component={NoteFormView} />
      </div>
    );
  }
}

export default withRouter(App);
