import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./NoteCard.css";

class NoteCard extends Component {
  delete = e => {
    this.props.deleteNote(this.props.match.params.id);
  };

  render() {
    const noteId = this.props.match.params.id;
    const notes = this.props.notes;
    let title;
    let body;

    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id == noteId) {
        title = notes[i].title;
        body = notes[i].body;
      }
    }

    console.log("props", noteId);

    return (
      <div className="container">
        <Menu />
        <div className="note-container">
          <div className="buttons">
            <Link to="/" onClick={this.delete}>
              Delete
            </Link>
            <Link to="/notes/edit/:id" onClick={this.props.getNote}>
              Edit
            </Link>
          </div>
          <div className="notecard">
            <h2>{title}</h2>
            <div className="body">{body}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteCard;
