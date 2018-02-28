import React, { Component } from "react";
import { viewNote } from "../actions";

class NoteList extends Component {
  render() {
    return (
      <div className="note-container">
        <h3 className="heading">Your Notes:</h3>
        <ul>
          {this.props.notes.map(note => {
            return (
              <li className="note-container notelist" key={note.id}>
                <h4>{note.title}</h4> <hr /> <p>{note.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NoteList;
