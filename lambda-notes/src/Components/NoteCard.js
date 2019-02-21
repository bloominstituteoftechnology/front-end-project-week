import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Card, Button } from "react-bootstrap";

import styled from 'styled-components'

const Container = styled.div`
  margin: 2%;
`

const Body = styled.div`
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  width:150px;
  padding: 1%;
  margin-bottom: 9%;
`

const ButtonContainer = styled.div`
  display: flex;
`

const NoteCard = ({ note }) => {

  return (
    <Container>
      <Card.Body>
        <Link
          to={`note/${note.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div>{note.title}</div>
        </Link>
        <hr />
        <Body>{note.textBody}</Body>
        <ButtonContainer>
          <Link to={`/note/${note.id}/edit`} style={{ color: "black" }}>
            <Button variant="info" style={{ width: "75px" }}>
              Edit
            </Button>
          </Link>
          <Link to={`note/${note.id}`} style={{ color: "black" }}>
            <Button variant="info" style={{ width: "75px" }}>
              View
            </Button>
          </Link>
        </ButtonContainer>
      </Card.Body>
    </Container>
  );
};

const mapStateToProps = state => ({
  notes: state.noteReducer.notes
});

export default connect(
  mapStateToProps,
  {  }
)(NoteCard);