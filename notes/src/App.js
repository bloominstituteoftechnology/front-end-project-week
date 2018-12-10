import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import AddNoteForm from "./components/AddNoteForm";
import SingleNote from "./components/SingleNote";
import EditNoteForm from "./components/EditNoteForm";

const url = "https://notes-api-backend.herokuapp.com/note";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: "",
      textBody: "",
      utitle: "",
      utextBody: "",
      isDeleting: false,
      search: ""
    };
  }
  componentDidMount() {
    axios
      .get(`${url}/get/all`)
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }
  componentDidUpdate() {
    axios
      .get(`${url}/get/all`)
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addNote = () => {
    axios
      .post(`${url}/create`, {
        title: this.state.title,
        textBody: this.state.textBody
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    this.setState({ title: "", textBody: "" });
  };
  toEditNote = (title, textBody) => {
    this.setState({ utitle: title, utextBody: textBody });
  };
  editNote = id => {
    axios
      .put(`${url}/edit/${id}`, {
        title: this.state.utitle,
        textBody: this.state.utextBody
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    this.setState();
  };
  toggleOnDeleting = () => {
    this.setState({ isDeleting: true });
  };
  toggleOffDeleting = e => {
    e.preventDefault();
    this.setState({ isDeleting: false });
  };
  deleteNote = id => {
    axios
      .delete(`${url}/delete/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    this.setState();
  };
  render() {
    let filteredNotes = this.state.notes.filter(
      note =>
        note.title.includes(this.state.search) ||
        note.textBody.includes(this.state.search)
    );
    return (
      <div className="app">
        <Navigation />
        <Route
          exact
          path="/"
          render={props => (
            <NotesList
              {...props}
              notes={filteredNotes}
              search={this.state.search}
              handleInput={this.handleInput}
            />
          )}
        />
        <Route
          exact
          path="/addnote"
          render={props => (
            <AddNoteForm
              {...props}
              title={this.state.title}
              textBody={this.state.textBody}
              handleInput={this.handleInput}
              addNote={this.addNote}
            />
          )}
        />
        <Route
          exact
          path="/note/:id"
          render={props => (
            <SingleNote
              {...props}
              notes={this.state.notes}
              toEditNote={this.toEditNote}
              isDeleting={this.state.isDeleting}
              toggleOnDeleting={this.toggleOnDeleting}
              toggleOffDeleting={this.toggleOffDeleting}
              deleteNote={this.deleteNote}
            />
          )}
        />
        <Route
          exact
          path="/note/:id/edit"
          render={props => (
            <EditNoteForm
              {...props}
              notes={this.state.notes}
              handleInput={this.handleInput}
              utitle={this.state.utitle}
              utextBody={this.state.utextBody}
              editNote={this.editNote}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
