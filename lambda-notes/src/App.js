import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NotesList from "./components/NotesList/NotesList";

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
  render() {
    return (
      <div className="App">
        Notes app:
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
