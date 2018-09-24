import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import NotesNav from "./components/NotesNav";
import Notes from "./components/Notes";
import NewNote from "./components/NewNote";
import Note from "./components/Note";
import EditNote from "./components/EditNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: "",
      content: "",
      term: "",
      errorMessage: null
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:7000/api/notes")
      .then(response => {
        console.log(response);
        this.setState({
          notes: response.data,
          errorMessage: null
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: "Error fetching notes!"
        });
        setTimeout(() => {
          this.setState({ errorMessage: null });
        }, 2000);
      });
  }

  setErrorHandler = errMsg => {
    this.setState({ errorMessage: errMsg });
    setTimeout(() => {
      this.setState({ errorMessage: null });
    }, 2000);
  };

  addNote = event => {
    event.preventDefault();
    const { title, content } = this.state;
    const newNote = { title, content };
    axios
      .post(`http://localhost:7000/api/notes`, newNote)
      .then(response => {
        this.setState({
          notes: response.data,
          errorMessage: null
        });
      })
      .catch(error => this.props.setErrorHandler("Error creating note!"));
    this.setState({
      title: "",
      content: ""
    });
  };

  deleteNote = note => {
    let notes = this.state.notes.slice();
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === note.id) {
        notes.splice(i, 1);
      }
    }
    this.setState({ notes });
  };

  editNote = note => {
    let notes = this.state.notes.slice();
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === note.id) {
        notes[i] = note;
      }
    }
    this.setState({ notes });
  };

  searchHandler = event => {
    this.setState({ term: event.target.value });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <NotesNav />
        <div className="main">
          <Route
            exact
            path="/notes"
            render={props => (
              <Notes
                {...props}
                notes={this.state.notes}
                searchHandler={this.searchHandler}
                term={this.state.term}
              />
            )}
          />
          {this.state.errorMessage !== null ? (
            <h3 style={{ color: "red" }}>{this.state.errorMessage}</h3>
          ) : null}
          <Route
            exact
            path="/add"
            render={props => (
              <NewNote
                {...props}
                notes={this.state.notes}
                title={this.state.title}
                content={this.state.content}
                addNote={this.addNote}
                handleInputChange={this.handleInputChange}
              />
            )}
          />
          <Route
            exact
            path="/notes/:id"
            render={props => (
              <Note
                {...props}
                notes={this.state.notes}
                deleteNote={this.deleteNote}
              />
            )}
          />
          <Route
            exact
            path="/notes/:id/edit"
            render={props => (
              <EditNote
                {...props}
                notes={this.state.notes}
                editNote={this.editNote}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
