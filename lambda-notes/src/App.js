import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import axios from "axios";

import ListOfNotes from "./components/ListofNotes";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import NoteCard from "./components/NoteCard";
import EditNote from "./components/EditNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: "",
      textBody: "",
      singleNote: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({
          notes: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNote = data => {
    axios
      .post("https://fe-notes.herokuapp.com/note/create", data)
      .then(response => {
        this.setState({
          title: "",
          textBody: ""
        });
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({ singleNote: response.data });
      })
      .catch(err => {
        console.error(err);
      });
  };

  editNote = (id, data) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
      .then(response => {
        this.setState({ note: response.data, title: "", textBody: "" });
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <section className="nav-section">
          <NavLink exact to={"/"}>
            Home
          </NavLink>
          <NavLink to={"/add-note"}>Add Note</NavLink>

          <Route
            path="/add-note"
            render={props => (
              <AddNote
                {...props}
                addNote={this.addNote}
                state={this.state}
                handleChange={this.handleChange}
              />
            )}
          />
        </section>
        <section className="content-container">
          <Route
            exact
            path="/"
            render={props => (
              <ListOfNotes
                {...props}
                state={this.state}
                fetchNote={this.fetchNote}
              />
            )}
          />
          <Route
            exact
            path={`/note/:id`}
            render={props => (
              <NoteCard
                {...props}
                notes={this.state.notes}
                singleNote={this.state.singleNote}
              />
            )}
          />
          <Route
            exact
            path={"/edit-note/:id"}
            render={props => (
              <EditNote
                {...props}
                state={this.state}
                singleNote={this.state.singleNote}
                editNote={this.editNote}
                handleChange={this.handleChange}
              />
            )}
          />
        </section>
      </div>
    );
  }
}

export default App;
