import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";


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
              <NavLink to="/notes" className="button">
                View Notes
              </NavLink>
            </li>
            <li>
              <NavLink to="/note-form" className="button">
                + Create Note
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <Route exact path="/notes" component={NotesList} />
          <Route path="/note/:id" component={Singlet} />
          <Route path="/note-form" component={NotesForm} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);