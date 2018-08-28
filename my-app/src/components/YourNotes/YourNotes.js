import React, { Component } from "react";
import NoteCard from "./NoteCard";

class YourNotes extends Component {
  state = {
    notes: this.props.notes
  };

  render() {
    return (
      <div>
        {this.props.notes.map((note, i) => {
          return (
            <div>
              <NoteCard key={i} note={note} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default YourNotes;
