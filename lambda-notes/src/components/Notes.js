import React, { Component } from "react";
import NoteCard from "./NoteCard";

class Note extends Component {

  render() {
    return (
      <div className="notes">
        {this.props.notes.map(note => {
          return (
            <NoteCard
              title={note.title}
              textBody={note.textBody}

              key={note.id}
              note={note}
              id={note.id} />
          )
        })}
      </div>
    );
  }
}

export default Note