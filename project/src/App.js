import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import AddNoteForm from "./components/AddNoteForm";

let notes = [
  {
    tags: ["tag", "otherTag"],
    title: "Note Title",
    textBody: "Note Body",
    _id: "cksdkjvckadd32"
  }
];
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: notes,
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
          path="/addnote"
          render={props => (
            <AddNoteForm
              {...props}
              title={this.state.title}
              textBody={this.state.textBody}
              handleInput={this.handleInput}
            />
          )}
        />
      </div>
    );
  }
}

export default App;