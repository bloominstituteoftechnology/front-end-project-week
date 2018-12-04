import React, { Component } from "react";
import "./App.css";

import NotesList from "./components/NotesList";
import Note from "./components/SingleNote";
import NoteForm from "./components/AddNote";

import axios from "axios";
import { Route, NavLink } from "react-router-dom";

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
        console.log(res.data);
        this.setState({ notes: res.data });
      })
      .catch(err => console.error(err));
  }

  addNote = data => {
    axios.post("https://fe-notes.herokuapp.com/note/create", data).then(res => {
      console.log(res);
      return axios
        .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(res => this.setState({ notes: res.data }))
        .catch(err => console.log(err));
    });
    // .catch(err => console.error(err));
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => {
        console.log(res);
        return axios
          .get("https://fe-notes.herokuapp.com/note/get/all")
          .then(res => this.setState({ notes: res.data }))
          .catch(err => console.error(err));
      });
  };

  editNote = (data, id) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
      .then(res => {
        console.log(res);
        // this.setState({ notes: res.data });
      })
      .catch(err => console.error(err));
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
          render={props => <NotesList {...props} notes={this.state.notes} />}
        />
        <Route
          path="/notes/:id"
          render={props => (
            <Note
              {...props}
              notes={this.state.notes}
              delete={this.deleteNote}
            />
          )}
        />
        <Route
          path="/add-note"
          render={props => (
            <NoteForm {...props} edit={this.editNote} addNote={this.addNote} />
          )}
        />
      </div>
    );
  }
}

export default App;
