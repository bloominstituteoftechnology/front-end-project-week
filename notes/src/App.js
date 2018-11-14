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

  fetchNotes = () => {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchNotes();
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    const newNote = {
      title: this.state.title,
      tags: this.state.tags,
      textBody: this.state.textBody
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
        this.fetchNotes();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="header">
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
           <h2>+ New Note</h2>
          </NavLink>
        </header>
        <div className="body">
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
            render={props => (
              <NoteDetail
                {...props}
                notes={this.state.notes}
                fetchNotes={this.fetchNotes}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
