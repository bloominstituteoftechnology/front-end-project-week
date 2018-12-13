import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Sidebar from "./Components/Sidebar";
import NotesList from "./Components/NotesList";
import NotesForm from "./Components/NotesForm";
import NotePage from "./Components/NotePage";
import EditForm from "./Components/EditForm";
import Authenticate from "./Authenticate/Authenticate";



class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: "",
      textBody: "",
      newTitle: "",
      newTextBody: "",
      delete: false,
      search:''
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3300/api/notes")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }
  // componentDidUpdate() {
  //   axios
  //     .get("http://localhost:3300/api/notes")
  //     .then(res => this.setState({ notes: res.data }))
  //     .catch(err => console.log(err));
  // }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getNote = id => {
    axios
      .get(`http://loclahost:3300/api/notes/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  addNote = () => {
    axios
      .post("http://localhost:3300/api/notes", {
      title: this.state.title,
      textBody: this.state.textBody
    });
    this.setState({ title: "", textBody: "" });
  };

  editNote = id => {
    axios
      .put(`http://localhost:3300/api/notes/${id}`, {
      title: this.state.newTitle,
      textBody: this.state.newTextBody
    });
    //@ts-ignore
    this.setState();
  };

  editNoteContent = (title, textBody) => {
    this.setState({ newTitle: title, newTextBody: textBody });
  };

  deleteToggleOn = () => {
    this.setState({ delete: true });
  };

  deleteToggleOff = event => {
    event.preventDefault();
    this.setState({ delete: false });
  };

  deleteNote = id => {
    axios
      .delete(`http://localhost:3300/api/notes/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
      window.location.reload();
  };

  render() {
    let filteredNotes = this.state.notes.filter(
      note =>
        note.title.toLowerCase().includes(this.state.search) ||
        note.textBody.toLowerCase().includes(this.state.search)
    );
    return (
      <div className="app">
        <Sidebar />
        <Route
          exact
          path="/"
          render={props => (
            <NotesList
              {...props}
              notes={filteredNotes}
              search={this.state.serach}
              changeHandler={this.changeHandler}
            />
          )}
        />
        <Route
          exact
          path="/create"
          render={props => (
            <NotesForm
              {...props}
              title={this.state.title}
              textBody={this.state.textBody}
              changeHandler={this.changeHandler}
              addNote={this.addNote}
            />
          )}
        />
        <Route
          exact
          path="/note/:id"
          render={props => (
            <NotePage
              {...props}
              notes={this.state.notes}
              editNoteContent={this.editNoteContent}
              delete={this.state.delete}
              deleteToggleOn={this.deleteToggleOn}
              deleteToggleOff={this.deleteToggleOff}
              deleteNote={this.deleteNote}
            />
          )}
        />
        <Route
          exact
          path="/note/:id/edit"
          render={props => (
            <EditForm
              {...props}
              notes={this.state.notes}
              changeHandler={this.changeHandler}
              newTitle={this.state.newTitle}
              newTextBody={this.state.newTextBody}
              editNote={this.editNote}
            />
          )}
        />
      </div>
    );
  }
}

export default Authenticate(App);
