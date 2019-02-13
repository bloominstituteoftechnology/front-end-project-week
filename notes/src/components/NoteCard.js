import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteNote } from "../actions/noteActions";

import styled from "styled-components";
import { Card, Button } from "react-bootstrap";

const NoteContainer = styled.div`
  padding: 10px 20px 15px 20px;
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-height: 2;
  height: 130px;
`;

const NoteTitle = styled.h3`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 20px;
  margin: 0px 0px 5px 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

// TODO: Fix the Delete button
const NoteCard = ({ note }) => {
  const deleteNotes = event => {
    event.preventDefault();
    this.props.deleteNote(`${note.id}`);
    this.props.history.push("/");
  };

  return (
    <NoteContainer>
      <Card.Body>
        <Link
          to={`note/${note.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <NoteTitle>{note.title}</NoteTitle>
        </Link>
        <hr />
        <TextContainer>{note.textBody}</TextContainer>
        <ButtonContainer>
          <Link to={`/note/${note.id}/edit`} style={{ color: "black" }}>
            <Button variant="outline-primary" style={{ width: "75px" }}>
              Edit
            </Button>
          </Link>
          <Button
            variant="link"
            onClick={deleteNotes}
            style={{ opacity: "0.4" }}
          >
            Delete
          </Button>
        </ButtonContainer>
      </Card.Body>
    </NoteContainer>
  );
};

const mapStateToProps = state => ({
  notes: state.noteReducer.notes
});

export default connect(
  mapStateToProps,
  { deleteNote }
)(NoteCard);
