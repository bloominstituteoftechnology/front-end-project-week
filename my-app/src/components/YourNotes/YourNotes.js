import React, { Component } from "react";
import NoteCard from "./NoteCard";
import "./YourNotes.css";

class YourNotes extends Component {
  state = {
    notes: this.props.notes
  };

  render() {
    return (
      <div className="cards-container">
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
