import React, { Component } from "react";
import Note from "./Note";
import { notes } from "../data";

class NotesList extends Component {
  render(props) {
    return (
      <div className="notes-list-div">
        <h3>Your Notes: </h3>
        <ul className="notes-list">
          {this.props.notes.map(note => {
            return (
              <Note title={note.title} content={note.content} note={note} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NotesList;
