import React, { Component } from "react";
import dummyData from "./dummyData";
import NoteList from "./components/NoteList";

class App extends Component {
  state = {
    notes: dummyData,
    viewNote: false,
    id: null
  };

  render() {
    return (
      <div className="rightPanel">
        <h1 className="header">Your Notes:</h1>
        <NoteList notes={this.state.notes} toggleNote={this.toggleNote} />
      </div>
    );
  }

  toggleNote = i => {
    return this.setState({
      ...this.state,
      viewNote: !this.state.viewNote,
      id: i
    });
  };
}

export default App;
