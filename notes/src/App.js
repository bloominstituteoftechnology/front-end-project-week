import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import NotesList from "./components/NotesList";
import Note from "./components/SingleNote";
import NoteForm from "./components/AddNote";

import axios from "axios";
import Fuse from "fuse.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      filtered: []
    };
  }
  reset = () => {
    this.setState({ filtered: [] });
  };

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.error(err));
  }

  addNote = data => {
    axios.post("https://fe-notes.herokuapp.com/note/create", data).then(res => {
      return axios
        .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(res => this.setState({ notes: res.data, filtered: [] }))
        .catch(err => console.log(err));
    });
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        return axios
          .get("https://fe-notes.herokuapp.com/note/get/all")
          .then(res => this.setState({ notes: res.data, filtered: [] }))
          .catch(err => console.error(err));
      });
  };

  editNote = (data, id) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
      .then(res => {
        return axios
          .get("https://fe-notes.herokuapp.com/note/get/all")
          .then(res => this.setState({ notes: res.data, filtered: [] }))
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };

  searchFilter = e => {
    var options = {
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 0,
      keys: ["title", "textBody"]
    };
    var fuse = new Fuse(this.state.notes, options);
    var result = fuse.search(e.target.value);
    this.setState({ filtered: result });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="add-note">Add Note</NavLink>
        </nav>
        <h1>Welcome to the Lambda Notes App</h1>

        <Route
          exact
          path="/notes"
          render={props => (
            <NotesList
              {...props}
              notes={
                this.state.filtered.length > 0
                  ? this.state.filtered
                  : this.state.notes
              }
              search={this.searchFilter}
              reset={this.reset}
            />
          )}
        />
        <Route
          path="/notes/:id"
          render={props => (
            <Note
              {...props}
              notes={
                this.state.filtered.length > 0
                  ? this.state.filtered
                  : this.state.notes
              }
              delete={this.deleteNote}
            />
          )}
        />
        <Route
          path="/add-note"
          render={props => <NoteForm {...props} addNote={this.addNote} />}
        />
        <Route
          exact
          path="/edit-note/:id"
          render={props => (
            <NoteForm {...props} editNote={this.editNote} edit />
          )}
        />
      </div>
    );
  }
}

export default App;
