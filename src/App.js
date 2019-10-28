import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NoteList from "./components/NoteList";
import AddNoteForm from "./components/AddNoteForm";
import { Route, NavLink, withRouter, Switch } from "react-router-dom";
import Note from "./components/Note";
import EditNoteForm from "./components/EditNoteForm";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";

const api = "https://adamsnotes.herokuapp.com/api/notes/";

const localAPI = "http://localhost:4000/api/notes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      searchTerm: "",
      loggedIn: false
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };
    const login = () => {
      if (token) {
        this.setState({ loggedIn: true });
      }
    };
    axios
      .get(`${localAPI}`, options)
      .then(res => {
        login();
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err));
  }

  fetchNotes = () => {
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get(`${localAPI}`, options)
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  };

  addNote = (e, newNote) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };
    axios
      .post(`${localAPI}`, newNote, options)
      .then(res => {
        newNote.id = res.data.success;
        this.setState({ notes: [newNote, ...this.state.notes] });
      })
      .catch(err => console.log(err));
  };

  deleteNote = (e, id) => {
    e.preventDefault();
    axios
      .delete(`${localAPI}${id}`)

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
      .put(`${localAPI}${id}`, state)
      .then(res => {
        const updatedArray = this.state.notes.map(note => {
          if (Number(note.id) === Number(res.data.id)) {
            return res.data;
          }
          return note;
        });
        this.setState({ notes: updatedArray });
      })
      .catch(err => console.log(err));
  };

  searchFilter = searchTerm => {
    const filteredNotes = this.state.notes.filter(note =>
      note.noteTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredNotes;
  };

  searchFilterHandler = e => {
    this.setState({ searchTerm: e.target.value });
  };

  loginHandler = async e => {
    e.preventDefault();
    localStorage.getItem("jwt")
      ? await this.setState({ loggedIn: true })
      : alert("you need to login");
  };

  logout = e => {
    localStorage.removeItem("jwt");
    this.setState({ loggedIn: false });
    this.props.history.push("/");
  };

  render() {
    //******************/ternary operator*******************
    return !this.state.loggedIn ? (
      <Switch>
        <Route path="/register" render={props => <Register {...props} />} />
        <Route
          exact
          path="/"
          render={props => <LoginPage loginHandler={this.loginHandler} />}
        />
      </Switch>
    ) : (
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
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <NoteList
                  {...props}
                  fetchNotes={this.fetchNotes}
                  notes={this.searchFilter(this.state.searchTerm)}
                  deleteNote={this.deleteNote}
                  addNote={this.addNote}
                  editNote={this.editNote}
                  searchFilterHandler={this.searchFilterHandler}
                  searchTerm={this.state.searchTerm}
                />
              )}
            />
            <Route
              path="/add-note"
              render={props => <AddNoteForm {...props} addNote={this.addNote} />}
            />
            <Route
              path="/note/:id"
              render={props => <Note {...props} deleteNote={this.deleteNote} />}
            />
            <Route
              path="/edit/:id"
              render={props => <EditNoteForm {...props} editNote={this.editNote} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
