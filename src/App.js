import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NoteList from "./components/NoteList";
import AddNoteForm from "./components/AddNoteForm";
import { Route, NavLink, withRouter } from "react-router-dom";
import Note from "./components/Note";
import EditNoteForm from "./components/EditNoteForm";
// import LoginPage from "./components/LoginPage";

const api = "https://gentle-depths-26576.herokuapp.com/api/notes/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      searchTerm: "",
      username: "",
      searchedNotes: []
    };
  }

  componentDidMount() {
    axios
      .get(`${api}`)
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  addNote = (e, newNote) => {
    e.preventDefault();
    axios
      .post(`${api}`, newNote)
      .then(res => {
        newNote.id = res.data.success;
        this.setState({ notes: [newNote, ...this.state.notes] });
      })
      .catch(err => console.log(err));
  };

  deleteNote = (e, id) => {
    e.preventDefault();
    axios
      .delete(`${api}${id}`)

      .then(() => {
        // eslint-disable-next-line
        const deletedNote = this.state.notes.filter(note => {
          if (note.id !== id) {
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
      .put(`${api}${id}`, state)
      .then(res => {
        console.log(res.data);
        const updatedArray = this.state.notes.map(note => {
          // console.log(note.id, res.data.id, note.id == res.data.id);
          if (Number(note.id) === Number(res.data.id)) {
            return res.data;
          }
          return updatedArray;
        });
        this.setState({ notes: updatedArray });
      })
      .catch(err => console.log(err));
  };

  searchFilter = searchTerm => {
    // eslint-disable-next-line
    const filteredNotes = this.state.notes.filter(note =>
      note.noteTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredNotes;
  };

  searchFilterHandler = e => {
    this.setState({ searchTerm: e.target.value });
  };

  loginHandler = (e, username) => {
    e.preventDefault();
    if (username !== "") {
      this.setState({ username: username });
    } else {
      alert("You need to login");
    }
  };

  logout = e => {
    e.preventDefault();
    this.setState({ username: "" });
  };

  editingNote = id => {
    return this.state.notes.find(note => Number(note.id) === Number(id));
  };

  render() {
    // if (this.state.username === "") {
    //   return <LoginPage loginHandler={this.loginHandler} />;
    // }

    return (
      <div className="App">
        <div className="side-bar">
          <h1 className="nav-title">Notes</h1>
          <div className="nav-button-container">
            <NavLink className="nav-buttons" to="/">
              View Your Notes
            </NavLink>
            <NavLink className="nav-buttons" to="/add-note">
              + Create New Note
            </NavLink>
            <div onClick={this.logout} className="nav-buttons">
              Logout
            </div>
          </div>
        </div>
        <div className="body">
          <Route
            exact
            path="/"
            render={props => (
              <NoteList
                {...props}
                // notes={this.searchFilter(this.state.searchTerm)}
                notes={this.searchFilter(this.state.searchTerm)}
                deleteNote={this.deleteNote}
                addNote={this.addNote}
                editNote={this.editNote}
                searchFilterHandler={this.searchFilterHandler}
                searchTerm={this.state.searchTerm}
              />
            )}
          />
          <Route path="/add-note" render={props => <AddNoteForm {...props} addNote={this.addNote} />} />
          <Route path="/note/:id" render={props => <Note {...props} deleteNote={this.deleteNote} />} />
          <Route
            path="/edit/:id"
            render={props => (
              <EditNoteForm note={this.editingNote(props.match.params.id)} {...props} editNote={this.editNote} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
