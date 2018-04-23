import React, { Component } from "react";
import NoteCard from "./NoteCard";
import { Container, Col, Row } from "reactstrap";
import "./NoteList.css";

class NoteList extends Component {
  render() {
    return (
      <div>
        <h3>Your Notes: </h3>
        <Container className="note-list">
          {this.props.notes.map((note, index) => {
            return <NoteCard key={note.title + index} note={note} />;
          })}
        </Container>
      </div>
    );
  }
}

export default NoteList;
