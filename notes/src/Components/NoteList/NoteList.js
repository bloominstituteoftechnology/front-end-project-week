import React, { Component } from "react";
import Note from "../Note/Note";
import Menu from "../Menu/Menu";
import "./NoteList.css";

class NoteList extends Component {
  render() {
    return (
      <div className="list">
        <Menu className="menu" />
        <div className="note-list">
          <h2>Your Notes:</h2>
          <div className="notes">
            {this.props.notes.map(note => {
              return <Note note={note} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default NoteList;
