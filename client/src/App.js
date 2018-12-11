import React, { Component } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import Sidebar from "./components/Sidebar";
import NoteView from "./components/NoteView";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      fnotes: []
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  //Gets all notes from database
  fetchNotes = () => {
    axios
      .get("https://lambda-notes-sgear.herokuapp.com/notes")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err.message));
  };

  //Adds new note to API
  addNote = obj => {
    axios
      .post("https://lambda-notes-sgear.herokuapp.com/notes", obj)
      .then(res => {
        this.setState({ notes: res.data.notes });
      })
      .catch(error => console.log(error));
  };

  //Edits notes, takes an object as a parameter
  editNote = obj => {
    axios
      .put(`https://lambda-notes-sgear.herokuapp.com/notes/${obj.id}`, obj)
      .then(res => {
        this.setState({ notes: res.data.notes });
        console.log("edited", res);
      })
      .catch(err => console.dir(err.message));
  };

  //Deletes note by id
  deleteNote = id => {
    axios
      .delete(`https://lambda-notes-sgear.herokuapp.com/notes/${id}`)
      .then(res => {
        this.setState({ notes: res.data.notes });
        console.log("deleted", res);
      })
      .catch(err => console.dir(err));
  };

  render() {
    return (
      <div className="App">
        <div className="home-view">
          <div>
            <Sidebar notes={this.state.notes} addNote={this.addNote} />
          </div>

          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <NotesList
                  {...props}
                  notes={this.state.notes}
                  editNote={this.editNote}
                  deleteNote={this.deleteNote}
                />
              )}
            />

            <Route
              exact
              path="/create"
              render={props => (
                <NoteForm
                  {...props}
                  notes={this.state.notes}
                  addNote={this.addNote}
                />
              )}
            />

            <Route
              exact
              path="/:id"
              render={props => (
                <NoteView
                  {...props}
                  notes={this.state.notes}
                  editNote={this.editNote}
                  editHandler={this.editHandler}
                  handleChange={this.handleChange}
                  deleteNote={this.deleteNote}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
