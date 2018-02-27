import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummyData";
import CreateNote from "./components/CreateNote";
import NoteList from "./components/NoteList";

class App extends Component {
  state = {
    notes: dummyData
  };

  render() {
    return (
      <div>
        <NoteList notes={this.state.notes} />
        <CreateNote addNote={this.addNote} />
      </div>
    );
  }

  addNote = newNote => {
    return this.setState({
      notes: [...this.state.notes, newNote]
    });
  };
}

export default App;
