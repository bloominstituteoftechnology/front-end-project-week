import React, { Component } from "react";
import "./YourNotes.css";

class NoteCard extends Component {
  render() {
    return (
      <div className="your-notes">
        <div className="text">
          <h4>Your Notes:</h4>
        </div>
        <div className="container">
          <div className="cards">
            <h4>{this.props.note.title}</h4>
            <hr />
            <p>
             {this.props.note.message}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteCard;
