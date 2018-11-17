import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [{ _id: null }],
      newId: 0
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  }

  noteSubmit = (title, content) => {
    this.setState({
      notes: [
        ...this.state.notes,
        { title: title, textBody: content, id: this.state.newId }
      ],
      newID: this.state.newId + 1
    });
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/noteform"
          render={props => (
            <NoteForm
              {...props}
              notes={this.state.notes}
              id={this.state.newId}
              noteSubmit={this.state.noteSubmit}
            />
          )}
        />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
