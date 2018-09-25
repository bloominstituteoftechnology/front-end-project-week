import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import HomeView from "./views/HomeView";
import "./App.css";
import NotesListView from "./views/NotesListView";
import NoteView from "./views/NoteView";
import NotesFormView from "./views/NotesFormView";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes" activeClassName="activeNavButton">
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/note-form" activeClassName="activeNavButton">
              Add Note
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/notes" component={NotesListView} />
        <Route path="/notes/:noteId" component={NoteView} />
        <Route path="/note-form" component={NotesFormView} />
      </div>
    );
  }
}

export default withRouter(App);
