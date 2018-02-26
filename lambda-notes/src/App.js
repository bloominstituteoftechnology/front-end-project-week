import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/sideBar";
import NoteList from "./components/noteList";
import { getNotes } from "./dummyNotes";

class App extends Component {
  state = {
    notes: getNotes()
  };
  render() {
    return (
      <div className="App">
        <SideBar />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
