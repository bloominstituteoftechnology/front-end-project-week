import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AddNote from "./components/AddNote";
import NotesView from "./components/NotesView";
import Note from "./components/Note";
import Edit from "./components/Edit";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: null,
          title: "Note Name",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1."
        },
        {
          id: null,
          title: "Note Name",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1."
        },
        {
          id: null,
          title: "Note Name",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1."
        },
        {
          id: null,
          title: "Note Name",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1."
        },
        {
          id: null,
          title: "Note Name",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1."
        },
        {
          id: null,
          title: "Note Name",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1."
        },
        {
          id: null,
          title: "Note Name",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1."
        },
        {
          id: null,
          title: "Note Name",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1."
        },
        {
          id: null,
          title: "Note Name",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1. Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1."
        }
      ],
      id: null,
      title: "",
      note: ""
    };
  }

  componentDidMount() {
    let notes = this.state.notes.map((note, i) => {
      return {
        id: i,
        title: note.title,
        note: note.note
      };
    });

    this.setState({ notes: notes });
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSaveHandler = e => {
    e.preventDefault();

    let id = this.state.notes.length;

    let notes = this.state.notes.slice();

    notes.push({
      id: id,
      title: this.state.title,
      note: this.state.note
    });

    this.setState(() => ({ notes: notes, id: null, title: "", note: "" }));
  };

  inputHandlerUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onUpdateHandler = (e, id) => {
    e.preventDefault();

    const edit = this.state.notes.slice();

    edit.splice(id, 1, {
      id: Number(id),
      title: this.state.title,
      note: this.state.note
    });

    this.setState(() => ({ notes: edit, id: null, title: "", note: "" }));
  };

  deleteHandler = (e, id) => {
    e.preventDefault();

    let deleted = this.state.notes.slice();

    deleted.splice(id, 1);

    deleted = deleted.map((note, i) => {
      return {
        id: i,
        title: note.title,
        note: note.note
      };
    });

    this.setState(() => ({ notes: deleted, id: null, title: "", note: "" }));
  };

  render() {
    console.log("app state", this.state.notes);
    return (
      <div className="app">
        <div className="navbar">
          <div className="navbar-title">Lambda Notes</div>
          <NavLink className="navlink" exact to="/">
            View Your Notes
          </NavLink>
          <NavLink className="navlink" to="/add-note">
            + Create New Note
          </NavLink>
        </div>

        <div className="notesbody">
          <Route
            exact
            path="/"
            render={props => <NotesView {...props} notes={this.state.notes} />}
          />

          <Route
            path="/add-note"
            render={props => (
              <AddNote
                {...props}
                inputHandler={this.inputHandler}
                onSaveHandler={this.onSaveHandler}
              />
            )}
          />

          <Route
            path="/note/:id"
            render={props => (
              <Note
                {...props}
                notes={this.state.notes}
                deleteHandler={this.deleteHandler}
              />
            )}
          />

          <Route
            path="/edit/:id"
            render={props => (
              <Edit
                {...props}
                notes={this.state.notes}
                inputHandlerUpdate={this.inputHandlerUpdate}
                onUpdateHandler={this.onUpdateHandler}
              />
            )}
          />
        </div>
      </div>
    );
  }
}
