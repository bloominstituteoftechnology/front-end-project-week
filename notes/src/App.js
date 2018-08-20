import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AddNote from "./components/AddNote";
import NotesView from "./components/NotesView";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      id: null,
      title: "",
      note: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSaveHandler = e => {
    e.preventDefault();
    const newNote = this.state.notes.slice();
    newNote.push({
      id: this.state.id,
      title: this.state.title,
      note: this.state.note
    });
    this.setState({ notes: newNote, id: null, title: "", note: "" });
  };

  render() {
    console.log("App State", this.state);
    return (
      <div className="app">
        <div className="navbar">
          <div className="navbar-title">Lambda Notes</div>
          <NavLink className="navlink" exact to="/">
            View Your Notes
          </NavLink>
          <NavLink className="navlink" to="/add-note">
            + Add a Note
          </NavLink>
        </div>
        <div className="notesbody">
          <Route
            path="/add-note"
            render={props => (
              <AddNote
                {...props}
                inputHandler={this.inputHandler}
                onSaveHandler={this.onSaveHandler}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={props => <NotesView {...props} notes={this.state.notes} />}
          />
        </div>
      </div>
    );
  }
}
