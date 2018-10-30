import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import axios from "axios";

//Import components
import NotesList from "./components/NotesList/NotesList";
import Menu from "./components/Menu/Menu";
import NewNote from "./components/NewNote/NewNote";
import NoteView from "./components/NoteView/NoteView";
import Authenticate from "./components/Authenticate/Authenticate.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_CLIENT_ID);
    //Get notes from Backend Project - 10/29/2018
    axios
      .get("http://localhost:8000/api/notes")
      .then(response => {
        console.log(response);
        this.setState({ ...this.state, notes: response.data });
      })
      .catch(err => console.log(err));
  }

  addNewNote(note) {
    const url = "http://localhost:8000/api/notes";
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };
    if (note.title.length > 0) {
      axios
        .post(url, note, options)
        .then(response => {
          if (response.status === 201) {
            axios
              .get(url)
              .then(response =>
                this.setState({ ...this.state, notes: response.data })
              )
              .catch(err => console.log(err));
          }
        })
        .catch(err => console.log(err));
    }
  }

  deleteNote(id) {
    const url = `http://localhost:8000/api/notes/`;
    const url_with_id = `http://localhost:8000/api/notes/${id}`;
    axios
      .delete(url_with_id)
      .then(res => {
        axios
          .get(url)
          .then(response =>
            this.setState({ ...this.state, notes: response.data })
          )
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  updateNote(updatedNote) {
    const id = updatedNote.id;
    const url = `http://localhost:8000/api/notes/`;
    const url_with_id = `http://localhost:8000/api/notes/${id}`;
    axios
      .put(url_with_id, updatedNote)
      .then(res => {
        axios
          .get(url)
          .then(response =>
            this.setState({ ...this.state, notes: response.data })
          )
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  getNoteFromState(id) {
    if (!id) {
      //do nothing
    }
    const noteArr = this.state.notes.filter(note => note.id.toString() === id);
    const note = noteArr[0];
    return note;
  }

  handleSearch(e) {
    // not implemented
  }
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="container">
          <Route
            exact
            path="/"
            render={props => <NotesList {...props} notes={this.state.notes} />}
          />
          <Route
            exact
            path="/notes/:id"
            render={props => {
              let id = props.match.params.id;
              console.log(this.state.notes);

              const noteArr = this.state.notes.filter(
                note => note.id.toString() === id
              );
              const note = noteArr[0];
              console.log(note);
              return (
                <NoteView
                  {...props}
                  deleteNote={this.deleteNote.bind(this)}
                  note={note}
                />
              );
            }}
          />
          <Route
            path="/new"
            render={() => <NewNote addNewNote={this.addNewNote.bind(this)} />}
          />

          <Route
            path="/notes/:id/edit"
            render={props => {
              let id = props.match.params.id;
              const note = this.getNoteFromState(id);
              return (
                <NewNote
                  {...props}
                  updateNote={this.updateNote.bind(this)}
                  addNewNote={this.addNewNote.bind(this)}
                  isUpdatingNote="true"
                  note={note}
                />
              );
            }}
          />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log(getNotesData);
//   console.log(state);
//   return {
//     notes: state.notes,
//     fetchingNotes: state.fetchingNotes,
//     fetchedNotes: state.fetchedNotes,
//     addingNote: state.addingNote,
//     addedNote: state.addedNote,
//     editingNote: state.editingNote,
//     editedNote: state.editedNote,
//     deletingNote: state.deletingNote,
//     deletedNote: state.deletedNote
//   };
// };

export default Authenticate(App);
