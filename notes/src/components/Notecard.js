import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NoteBody } from "./styles";

const Card = styled.div`
  background: white;
  height: 220px;
  border: 1px solid #eee;
  padding-bottom: 20px;
  &:hover {
    box-shadow: 0 7px 21px 0 rgba(200, 200, 200, 0.1),
      0 5px 20px 0 rgba(200, 200, 200, 0.1);
  }
`;
const NoteTitle = styled.h3`
  padding: 16px;
  margin: 2px 4px;
  border-bottom: 1px solid #eee;
`;

class NoteCard extends Component {
  render() {
    const note = this.props.note;
    return (
      <Link key={note._id} to={`/notes/${note._id}`}>
        <Card>
          <NoteTitle>{note.title}</NoteTitle>
          <NoteBody>
            {note.textBody.length > 150
              ? `${note.textBody.substring(0, 150)}...`
              : note.textBody}
          </NoteBody>
        </Card>
      </Link>
    );
  }
}

export default NoteCard;
