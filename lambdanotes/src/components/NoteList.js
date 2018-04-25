import React, { Component } from "react";
import { Container } from "reactstrap";

import NoteCard from "./NoteCard";
import "./NoteList.css";

class NoteList extends Component {
  render() {
    return (
      <div>
        <h3>Your Notes: </h3>
        <Container className="note-list">
          {this.props.notes.map((note, index) => {
            return (
              <NoteCard key={note.title + index} note={note} id={note.id} />
            );
          })}
        </Container>
      </div>
    );
  }
}

export default NoteList;
