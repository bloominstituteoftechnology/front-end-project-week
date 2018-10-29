import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import axios from "axios";
import Notes from "./components/Notes";
import SideBar from "./components/SideBar";
import Note from "./components//Note";
import NoteForm from "./components/NoteForm";
import SingleNote from "./components/SingleNote";
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      singleNoteId: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }));
  }

  handleAddNewNote = () => {
    axios.get("https://fe-notes.herokuapp.com/note/get/all").then(res =>
      this.setState({
        notes: res.data
      })
    );
  };
  handleDeleteNote = () => {
    axios.get("https://fe-notes.herokuapp.com/note/get/all").then(res =>
      this.setState({
        notes: res.data
      })
    );
  };

  routeToSingleNote = noteId => {
    // this.setState({
    //   singleNoteId: noteId
    // });
    localStorage.setItem("noteID", noteId);
  };
  render() {
    return (
      <div className="App">
        <Route path="/" component={SideBar} />
        <Route
          exact
          path="/"
          render={props => (
            <Notes
              notes={this.state.notes}
              routeToSingleNote={this.routeToSingleNote}
              {...props}
            />
          )}
        />
        <Route
          path="/notes/:id"
          render={props => (
            <SingleNote
              {...props}
              singleNoteId={this.state.singleNoteId}
              handleDeleteNote={this.handleDeleteNote}
            />
          )}
        />
        <Route
          exact
          path="/add"
          render={props => (
            <NoteForm {...props} handleAddNewNote={this.handleAddNewNote} />
          )}
        />
      </div>
    );
  }
}

export default App;
