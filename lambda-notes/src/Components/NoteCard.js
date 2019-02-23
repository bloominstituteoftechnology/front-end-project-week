import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Card } from "react-bootstrap";

import styled from 'styled-components'

const Container = styled.div`
  margin: 2%;
`

const Body = styled.div`
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  width: 113px;
  height: 5rem;
  padding: 1%;
  margin: 3% 0% 17% 0%;
  background: #F4F4F4;
  line-height: 5;
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
`
const Button = styled.button`
  border-radius: 10%;
  border: none;
  margin: 0% 1%;
  color: white;
  background-color: #373737;
  width: 50px;
`

const Title = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: .5rem
`


const NoteCard = ({ note }) => {

  return (
    <Container>
      <Card.Body>
        <Link
          to={`note/${note.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Title>{note.title}</Title>
        </Link>
        <Body>{note.textBody}</Body>
        <ButtonContainer>
          <Link to={`/note/${note.id}/edit`} style={{ color: "black" }}>
            <Button>
              Edit
            </Button>
          </Link>
          <Link to={`note/${note.id}`} style={{ color: "black" }}>
            <Button>
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