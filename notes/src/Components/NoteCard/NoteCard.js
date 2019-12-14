import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";

class NoteCard extends Component {
  render() {
    const noteId = this.props.match.params.id;
    const notes = this.props.notes;
    let note;
    let title;
    let body;

    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id == noteId) {
        note = notes[i];
        title = notes[i].title;
        body = notes[i].body;
      }
    }
    console.log(title, body);

    return (
      <div className="container">
        <Menu />
        <div className="note-container">
          <div className="notecard">{title}{body}</div>
        </div>
      </div>
    );
  }
}

export default NoteCard;
