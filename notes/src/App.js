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
          id: 1,
          title: "Note Title",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1"
        },
        {
          id: 2,
          title: "Note Title",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis2"
        },
        {
          id: 3,
          title: "Note Title",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis3"
        },
        {
          id: 4,
          title: "Note Title",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis1"
        },
        {
          id: 5,
          title: "Note Title",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis2"
        },
        {
          id: 6,
          title: "Note Title",
          note:
            "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phassellus diam metus, blandit ac purus a, efficitur mollis3"
        }
      ],
      id: null,
      title: "",
      note: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSaveHandler = e => {
    e.preventDefault();
    const notes = this.state.notes.slice();

    const rowLen = this.state.notes.length;
    let id;
    this.state.notes.map((note, i) => {
      if (rowLen === i + 1) {
        id = note.id + 1;
        return id;
      } else return null;
    });

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

    edit.splice(id - 1, 1, {
      id: id,
      title: this.state.title,
      note: this.state.note
    });

    this.setState(() => ({ notes: edit, id: null, title: "", note: "" }));
  };

  deleteHandler = (e, id) => {
    e.preventDefault();

    const deleted = this.state.notes.slice();

    deleted.splice(id - 1, 1);

    this.setState(() => ({ notes: deleted, id: null, title: "", note: "" }));
  }
 
  

  render() {
    return (
      <div className="app">
        <div className="navbar">
          <div className="navbar-title">Lambda Notes</div>
          <NavLink className="navlink" exact to="/">
            View Your Notes
          </NavLink>
          <NavLink className="navlink" to="/add-note">
            + Add a Note
          </NavLink>
        </div>
        <div className="notesbody">

          <Route
            exact
            path="/"
            render={props => 
              <NotesView 
                {...props} 
                notes={this.state.notes} />}
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
            render={props => 
              <Note 
                {...props} 
                notes={this.state.notes}
                deleteHandler={this.deleteHandler} />}
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
