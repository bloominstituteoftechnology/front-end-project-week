import React, { Component } from "react";
import "./App.css";
import NoteGen from "./components/NoteGen";
import dummyData from "./dummyData";
import CreateNote from "./components/CreateNote";

class App extends Component {
  state = {
    notes: dummyData,
    viewNote: {
      view: false,
      id: null
    },
    createNote: {
      view: false
    }
  };

  render() {
    return (
      <div className="App">
        <div
          className={
            this.state.viewNote.view ? "singleNoteLeftPanel" : "leftPanel"
          }
        >
          <h1 className="leftHeader">Lambda Notes</h1>
          <button
            onClick={() =>
              this.state.viewNote.view
                ? this.setState({
                    ...this.state,
                    viewNote: { view: !this.state.viewNote.view }
                  })
                : null
            }
          >
            View Your Notes
          </button>
          <button>+ Create New Note</button>
        </div>
        {this.state.viewNote.view ? (
          <div className="singleNote">
            <h1 className="singleNoteTitle">
              {this.state.notes[this.state.viewNote.id].title}
            </h1>
            <p className="singleNoteContent">
              {this.state.notes[this.state.viewNote.id].content}
            </p>
          </div>
        ) : (
          <div className="rightPanel">
            <h2 className="rightHeader">Your Notes:</h2>
            <NoteGen notes={this.state.notes} toggleNote={this.toggleNote} />
          </div>
        )}
      </div>
    );
  }
  toggleNote = i => {
    return this.setState({
      ...this.state,
      viewNote: { view: !this.state.viewNote.view, id: i }
    });
  };

  addNote = newNote => {
    return this.setState({
      notes: [...this.state.notes, newNote]
    });
  };
}
{
  /* <CreateNote addNote={this.addNote} /> */
} // <------------CREATE NOTE---------->
export default App;
