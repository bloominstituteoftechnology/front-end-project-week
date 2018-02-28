import React, { Component } from "react";
import DummyData from "./DummyData";
import "./Notes.css";

class Notes extends Component {
  state = {
    notes: DummyData,
  };
  create = false;

  render() {
    return (
      <div className="container">
        <div className="leftPanel">
          <h1 className="leftHeader">Lambda notes</h1>
          <button>View Your Notes</button>
          <button onClick={() => this.Create()}>+ Create New Note</button>
        </div>
        {/* CREATE CONDITION FOR CREATE NOTE DISPLAY */}
        <div className="rightPanel">
          <h1 className="notesHeader"> Your Notes: </h1>
          {this.state.notes.map((note, i) => {
            return (
              <div className="singleNote" key={i}>
                <h1 className="singleNoteTitle">{note.title}</h1>
                <p className="singleNoteContent">{note.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  Create() {
    this.create = true;
    console.log(this.create);
  }
}

export default Notes;
