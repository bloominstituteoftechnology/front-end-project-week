import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NoteList from "./components/NoteList";
import AddNoteForm from "./components/AddNoteForm";
import { Route, NavLink, withRouter } from "react-router-dom";
import Note from "./components/Note";
import EditNoteForm from "./components/EditNoteForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  addNote = (e, newNote) => {
    e.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", newNote)
      .then(res => {
        newNote._id = res.data.success;
        this.setState({ notes: [...this.state.notes, newNote] });
      })
      .catch(err => console.log(err));
  };

  deleteNote = (e, id) => {
    e.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)

      .then(() => {
        const deletedNote = this.state.notes.filter(note => {
          if (note._id !== id) {
            return note;
          }
        });
        this.setState({ notes: deletedNote });
      })
      .catch(err => console.log(err));
  };

  editNote = (e, id, state) => {
    e.preventDefault();
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, state)
      .then(res => {
        const updatedArray = this.state.notes.map(note => {
          if (note._id === res.data._id) {
            return res.data;
          }
          return note;
        });
        console.log("inside edit note");
        this.setState({ notes: updatedArray });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <div className="side-bar">
          <h1 className="nav-title">
            Lambda <br />
            Notes
          </h1>
          <div className="nav-button-container">
            <NavLink className="nav-buttons" to="/">
              View Your Notes
            </NavLink>
            <NavLink className="nav-buttons" to="/add-note">
              + Create New Note
            </NavLink>
          </div>
        </div>
        <div className="body">
          <Route
            exact
            path="/"
            render={props => (
              <NoteList
                {...props}
                notes={this.state.notes}
                deleteNote={this.deleteNote}
                addNote={this.addNote}
                editNote={this.editNote}
              />
            )}
          />
          <Route path="/add-note" render={props => <AddNoteForm {...props} addNote={this.addNote} />} />
          <Route path="/note/:id" render={props => <Note {...props} deleteNote={this.deleteNote} />} />
          <Route path="/edit/:id" render={props => <EditNoteForm {...props} editNote={this.editNote} />} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
