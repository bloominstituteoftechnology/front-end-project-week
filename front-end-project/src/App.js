import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { CssBaseline } from "@material-ui/core";
import axios from "axios";
import { ListView, NoteView, Create, Edit, Login, Home, Register } from "./components/index";
import "../src/styling/App.css";



class App extends Component {
  state = {
    notes: [],
    deleting: false,
    currentNote: {}
  };

  componentDidMount() {
    axios.get("https://lambda-take-note.herokuapp.com/notes")
    .then(response => {
      this.setState({
        notes: response.data.notes
      })
    }).catch(err => {
      this.props.history.push('/register')
      })
  }

  fetchNote(id) {
    axios
      .get(`https://lambda-take-note.herokuapp.com/notes/${id}`)
      .then(response => {
        this.setState({
          currentNote: response.data.note
        });
      }).catch(err => {
        this.props.history.push('/register')
      })
  }

  addNote(note) {
    axios
      .post("https://lambda-take-note.herokuapp.com/notes", note)
      .then(response => {
        console.log('response', response)
        let notes = this.state.notes;
        let savedNote = response.data.savedNote;
        notes.unshift(savedNote);
        this.setState({
          notes: notes
        });
      }).catch(err => {
        this.props.history.push('/register')
      })
  }

  editNote(id, note) {
    axios
      .put(`https://lambda-take-note.herokuapp.com/notes/${id}`, note)
      .then(response => {
        let currentState = this.state.notes;
        let lessNote = currentState.filter(
          note => note._id !== response.data.updatedNote._id
        );
        lessNote.unshift(response.data.updatedNote);
        this.setState({
          notes: lessNote
        });
      }).catch(err => {
        this.props.history.push('/register')
      })
  }

  deleteNote(id) {
    axios
      .delete(`https://lambda-take-note.herokuapp.com/notes/${id}`)
      .then(response => {
        let sparedNotes = this.state.notes.filter(
          note => note._id !== response.data.deletedNote._id
        );
        this.setState({
          notes: sparedNotes,
          deleting: false
        });
      }).catch(err => {
        this.props.history.push('/login')
      })
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Switch>
          <Route
            exact path="/"
            render={props => (
              <Home
                {...props}
                />
            )}/>
        <Route
            path="/login"
            render={props => (
              <Login
              {...props}
              />
            )}/>
        <Route
            path="/register"
            render={props => (
            <Register
            {...props}
            />
            )}/>
          <Route
            exact
            path="/notes"
            render={props => (
              <ListView
                {...props}
                notes={this.state.notes}
                currentNote={this.state.currentNote}
                fetchNote={this.fetchNote.bind(this)}
              />
            )}
          />
          <Route
            path="/notes/:id"
            render={props => (
              <NoteView
                {...props}
                notes={this.state.notes}
                currentNote={this.state.currentNote}
                deleteNote={this.deleteNote.bind(this)}
              />
            )}
          />
          <Route
            path="/create"
            render={props => (
              <Create
                {...props}
                notes={this.state.notes}
                currentNote={this.state.currentNote}
                addNote={this.addNote.bind(this)}
              />
            )}
          />
          <Route
            path="/edit/:id"
            render={props => (
              <Edit
                {...props}
                notes={this.state.notes}
                currentNote={this.state.currentNote}
                editNote={this.editNote.bind(this)}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
