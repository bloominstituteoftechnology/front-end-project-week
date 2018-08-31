import React, { Component } from "react";
import "./YourNotes.css";
import { Link } from "react-router-dom";

// const URL = "https://killer-notes.herokuapp.com/note/get/id";

class NoteCard extends Component {
  render() {
    return (
      <Link to={`/noteview/${this.props.note._id}`} >
        <div className="cards">
          <h4>{this.props.note.title}</h4>
          <hr />
          <p>{this.props.note.textBody}</p>
        </div>
      </Link>
    );
  }
}

export default NoteCard;
