import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteDetail from "./components/NoteDetail";
import NoteForm from "./components/NoteForm";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      tags: "",
      title: "",
      textBody: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err.response));
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody,
    };
    axios
      .post("https://fe-notes.herokuapp.com/note/create", newNote)
      .then(response => {
        console.log(response);
        this.setState({
          tags: "",
          title: "",
          textBody: ""
        });
      })
      .catch(err => "this is error" + err);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink
            to="/"
            activeClassName="activeNewNote"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1>Lambda Notes</h1>
          </NavLink>
          <NavLink
            to="/new-note"
            activeClassName="activeNewNote"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            + New Note
          </NavLink>
          <Route
            path="/new-note"
            render={() => (
              <NoteForm
                notes={this.state.notes}
                handleInput={this.handleInput}
                handleClick={this.handleClick}
              />
            )}
          />
          <Route
            path="/"
            exact
            component={() => <NoteList notes={this.state.notes} />}
          />
          <Route
            path="/notes/:id"
            render={props => <NoteDetail {...props} notes={this.state.notes} />}
          />
        </header>
      </div>
    );
  }
}

export default App;
