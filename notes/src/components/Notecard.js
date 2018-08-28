import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NoteBody } from "./styles";

const Card = styled.div`
  background: white;
  height: 220px;
  border: 1px solid #ccc;
`;
const NoteTitle = styled.h3`
  padding: 16px;
  margin: 2px 4px;
  border-bottom: 1px solid #eee;
`;

class NoteCard extends Component {
  render() {
    return (
      <Link to={`/notes/${this.props.index}`}>
        <Card>
          <NoteTitle>{this.props.note.title}</NoteTitle>
          <NoteBody>
            {this.props.note.body.length > 150
              ? `${this.props.note.body.substring(0, 150)}...`
              : this.props.note.body}
          </NoteBody>
        </Card>
      </Link>
    );
  }
}

export default NoteCard;
