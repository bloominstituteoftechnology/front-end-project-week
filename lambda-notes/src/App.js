import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SideBar from "./components/SideBar";
import NotesList from "./components/NotesList";
import NotesForm from "./components/NotesForm";
import NotePage from "./components/NotePage";
import EditForm from "./components/EditForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: "",
      textBody: "",
      newTitle: "",
      newTextBody: "",
      delete: false
    };
  }
  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }
  componentDidUpdate() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNote = () => {
    axios
      .post("https://fe-notes.herokuapp.com/note/create", {
        title: this.state.title,
        textBody: this.state.textBody
      })
    this.setState({ title: "", textBody: "" });
  };

  editNote = id => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
        title: this.state.newTitle,
        textBody: this.state.newTextBody
      })
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
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    this.setState();
  };
  render() {
    return (
      <div className="app">
        <SideBar />
        <Route
          exact
          path="/"
          render={props => (
            <NotesList
              {...props}
              notes={this.state.notes}
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
              editNoteContent={this.editNoteContent }
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

export default App;
