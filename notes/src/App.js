import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import AddNoteForm from "./components/AddNoteForm";
import SingleNote from "./components/SingleNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: "",
      textBody: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addNote = () => {
    axios.post("https://killer-notes.herokuapp.com/note/create", {
      title: this.state.title,
      textBody: this.state.textBody
    });
    this.setState({ title: "", textBody: "" });
  };
  render() {
    return (
      <div className="app">
        <Navigation />
        <Route
          exact
          path="/"
          render={props => <NotesList {...props} notes={this.state.notes} />}
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
          path="/:id"
          render={props => <SingleNote {...props} notes={this.state.notes} />}
        />
      </div>
    );
  }
}

export default App;
