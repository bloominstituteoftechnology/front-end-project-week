import React, { Component } from "react";
import NoteCard from "./NoteCard";
import { Container, Col, Row } from "reactstrap";

class NoteList extends Component {
  render() {
    return (
      <Container>
        {this.props.notes.map((note, index) => {
          return <NoteCard key={note.title + index} note={note} />;
        })}
      </Container>
    );
  }
}

export default NoteList;
