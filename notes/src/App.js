import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import Note from "./components/Note";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "failed to get api"));
  }

  addNote = (e, obj) => {
    e.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "failed to create"));
  };

  editNote = id => {
    axios
      .put("https://fe-notes.herokuapp.com/note/edit/id")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err.res));
  };

  deleteNote = id => {
    axios
      .delete("https://fe-notes.herokuapp.com/note/delete/id")
      .then(res => {
        console.log("you have successfully ditched this note");
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "note wasnt ditched"));
  };

  render() {
    return (
      <div className="App">
        <ul className="sidebar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              View Your Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/note-form" activeClassName="activeNavButton">
              + Create New Note
            </NavLink>
          </li>
        </ul>

        <Route
          path="/note-form"
          render={() => (
            <NoteForm
              notes={this.state.notes}
              addNote={this.addNote}
              editNote={this.editNote}
            />
          )}
        />
        <Route
          path="/note/:id"
          render={() => (
            <Note notes={this.state.notes} deleteNote={this.deleteNote} />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
          )}
        />
      </div>
    );
  }
}

export default App;
