import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Route, Switch, withRouter } from "react-router-dom";
import Sidebar from "./components/SideBar";
import styled from "styled-components";
import NoteList from "./components/NoteList/NoteList";
import NewNote from "./components/NewNote";
import NoteView from "./components/NoteView";
import EditNote from "./components/EditNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
      // note: {}
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    // fetch data from the api
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log(response);
        // set our state with the new data
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  editNote = id => {
    this.setState({
      isUpdating: this.state.notes.filter(note => note.id == id)[0]
    });
  };

  editingNote = selectedNote => {
    let editedNote = this.state.notes.filter(
      note => note.id == selectedNote.id
    )[0];
    editedNote.title = selectedNote.title;
    editedNote.content = selectedNote.content;
    let list = this.state.notes.filter(note => note.id != selectedNote.id);
    console.log("editingNote:", list, editedNote);
    this.setState({ notes: [...list, editedNote] });
  };

  deleteNote = id => {
    this.setState({ notes: this.state.notes.filter(note => note.id !== id) });
  };

  render() {
    return (
      <div className="container">
        <Sidebar />
        <Route
          path="/list-view"
          render={props => <NoteList {...props} notes={this.state.notes} />}
        />
        <Route
          path="/create-new"
          render={props => (
            <NewNote
              {...props}
              notes={this.state.notes}
              postNote={this.addToNotes}
            />
          )}
        />
        <Route
          path="/users/note-view/:id"
          render={props => (
            <NoteView
              {...props}
              notes={this.state.notes}
              editNote={this.editNote}
              deleteNote={this.deleteNote}
            />
          )}
        />
        {/* <Route exact path="/users/note-view/:id" component={NoteView} /> */}
        )} />
      </div>
    );
  }
}

export default App;
