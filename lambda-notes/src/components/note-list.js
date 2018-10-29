import React, { Component } from "react";
import Note from "./note";

class NoteList extends Component {
  render() {
    return (
      <div>
        <h1>Your Notes:</h1>
        <div className="noteCards">
          {this.props.notes.map(note => {
            return (
              <Note
                title={note.title}
                id={note._id}
                tags={note.tags}
                textBody={note.textBody}
                key={note._id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default NoteList;
