import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import Home from "./components/Home";
import "./App.css";
import NotesList from "./components/NotesList";
import Singlet from "./components/Singlet";
import NotesForm from "./components/NoteForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="left-side">
          <ul className="side-bar">
            <h1>Lambda Notes</h1>
            <li>
              <NavLink exact to="/" className="button">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/notes" className="button">
                Notes
              </NavLink>
            </li>
            <li>
              <NavLink to="/note-form" className="button">
                +Create New Note
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <Route exact path="/" component={Home} />
          <Route exact path="/notes" component={NotesList} />
          <Route path="/notes/:id" component={Singlet} />
          <Route path="/note-form" component={NotesForm} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
