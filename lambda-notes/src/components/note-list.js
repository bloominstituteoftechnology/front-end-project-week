import React, { Component } from "react";
import Note from "./note";
import { Link } from "react-router-dom";

class NoteList extends Component {
  render() {
    return (
      <div>
        <h1>Your Notes:</h1>
        <div className="noteCards">
          {this.props.notes.map(note => {
            return (
              <Link className="LinkStyle" to={`/note-details/${note._id}`}>
                <Note
                  title={note.title}
                  id={note._id}
                  tags={note.tags}
                  textBody={note.textBody}
                  key={note._id}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NoteList;
