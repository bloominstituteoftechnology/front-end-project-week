import React, { Component } from "react";
import "./YourNotes.css";

class NoteCard extends Component {
  render() {
    return (
      <div className="cards">
        <h4>{this.props.note.title}</h4>
        <hr />
        <p>{this.props.note.textBody}</p>
      </div>
    );
  }
}

export default NoteCard;
