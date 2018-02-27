import React, { Component } from "react";
import "./App.css";
import NoteGen from "./components/NoteGen";
import dummyData from "./dummyData";
import CreateNote from "./components/CreateNote";

class App extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    return this.setState({
      notes: dummyData
    });
  }
  render() {
    return (
      <div className="App">
        <div className="leftPanel">
          <h1 className="App-title">Lambda Notes</h1>
        </div>
        <div className="rightPanel">
          <h2>Your Notes:</h2>
          <NoteGen notes={this.state.notes} />
          <CreateNote addNote={this.addNote} />
        </div>
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
