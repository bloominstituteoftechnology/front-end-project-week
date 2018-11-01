import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import ListNotes from "../views/ListNotes";
import AddEditNote from "../views/AddEditNote";
import ReadNote from "../views/ReadNote";

import Sidebar from "./Sidebar";

import "./App.css";

const url = "https://fe-notes.herokuapp.com/note";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  getNotes() {
    console.log("getNotes called");
    axios
      .get(`${url}/get/all`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }

  postNote(newNote) {
    console.log('Posting new note');
    axios
      .post(`${url}/create`, newNote)
      .then(this.getNotes)
      .catch(error => console.log(error));
  }

  editNote(id, newNoteContent) {
    console.log('Updating note: ' + id + '/nwith: ' + newNoteContent);
    axios
      .put(`${url}/edit/${id}`)
      .then(this.getNotes)
      .catch(error => console.log(error));
  }

  deleteNote(id) {
    console.log('Deleting note: ' + id);
    axios
      .delete(`${url}/delete/${id}`)
      .then(this.getNotes)
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getNotes();
  }

  renderNote = ({ match }) => {
    const selectedNote = this.state.notes.find(
      note => note._id === match.params.noteId
    );
    return <ReadNote {...selectedNote} />;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <ListNotes notes={this.state.notes} />}
            />
            <Route exact path="/n/:noteId" render={this.renderNote} />
            <Route path="/AddEditNote" render={() => <AddEditNote postNote={this.postNote} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
