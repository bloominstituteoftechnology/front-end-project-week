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
      inputTag: "",
      inputTitle: "",
      inputBody: ""
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

  handleInputTag = e => {
    this.setState({
      inputTag: e.target.value
    });
  };
  handleInputTitle = e => {
    this.setState({
      inputTitle: e.target.value
    });
  };
  handleInputBody = e => {
    this.setState({
      inputBody: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const newNote = {
      title: this.state.inputTitle,
      body: this.state.inputBody
    };
    this.setState({
      notes: [...this.state.notes, newNote],
      newTask: ""
    });
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
                handleInputTag={this.handleInputTag}
                handleInputTitle={this.handleInputTitle}
                handleInputBody={this.handleInputBody}
                handleClick={this.handleClick}
              />
            )}
          />
          <Route
            path="/"
            exact
            component={props => <NoteList {...props} notes={this.state.notes} />}
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
