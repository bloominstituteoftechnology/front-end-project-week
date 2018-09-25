import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";

//Import components
import NotesList from "./components/NotesList/NotesList";
import Menu from "./components/Menu/Menu";
import NewNote from "./components/NewNote/NewNote";
import NoteView from "./components/NoteView/NoteView";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          title: "My thoughts...",
          content:
            "This is a note about my thoughts during recent travel adventure"
        },
        {
          id: 1,
          title: "Favorite quotes",
          content:
            "This note includes my favorite quotes from books, movies, songs, etc."
        }
      ]
    };
  }

  addNewNote(note) {
    if (note.title.length > 0) {
      console.log(this.state);
      const notes = [...this.state.notes];
      note.id = this.state.notes.length;
      notes.push(note);
      this.setState(...this.state, { notes });
    }
  }

  deleteNote(id) {
    console.log("delete function called");
    console.log("state: ");
    console.log(this.state);
    const notes = this.state.notes.filter(note => note.id !== id);
    console.log("notes array: ");
    console.log(notes);
    this.setState(...this.state, { notes });
  }

  updateNote(updatedNote) {
    console.log("update note");
    const note = this.state.notes.find(note => note.id === updatedNote.id);
    console.log("old note:");
    console.log(note);
    note.title = updatedNote.title;
    note.content = updatedNote.content;
    console.log("new note:");
    console.log(note);
    const notes = this.state.notes.map(note => {
      if (note.id.toString() === updatedNote.id) {
        return updatedNote;
      }
    });
    this.setState(...this.state, { notes }, console.log(this.state));

    console.log(this.props);
  }

  getNoteFromState(id) {
    if (!id) {
      console.log("do noooot send me back to edit");
    }
    console.log(id);
    console.log(this.state.notes);
    const noteArr = this.state.notes.filter(note => note.id.toString() === id);
    console.log(noteArr);
    const note = noteArr[0];
    return note;
  }
  render() {
    console.log(this.state.notes);
    return (
      <div className="App">
        <Menu />
        <div className="container">
          <Route
            exact
            path="/"
            render={() => (
              <NotesList {...this.props} notes={this.state.notes} />
            )}
          />
          <Route
            exact
            path="/notes/:id"
            render={props => {
              let id = props.match.params.id;
              console.log(id);

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

export default App;
