import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Import components
import NotesList from "./components/NotesList/NotesList";
import Menu from "./components/Menu/Menu";
import NewNote from "./components/NewNote/NewNote";
class App extends Component {
  constructor() {
    super();
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
    console.log(this.state);
    const notes = [...this.state.notes];
    notes.push(note);
    this.setState(...this.state, { notes });
  }
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="container">
          <NewNote addNewNote={this.addNewNote.bind(this)} />
          <NotesList notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default App;
