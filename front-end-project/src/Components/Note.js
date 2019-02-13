import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DeleteNote from './DeleteNote';
const Container = styled.div`
   h2 {
    margin: 20px 0;
    font-weight: bold;
    font-size: 3rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 25px;
  }
`;
const Section = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    border: none;
    text-decoration: underline;
    background-color: transparent;
    font-weight: bold;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
const Note = props => {
  return (
    <Container>
      <Section>
        <Link to={`/edit/${props.note._id}`}>
          <button type="button">edit</button>
        </Link>
        <DeleteNote
          show={props.show}
          hideModal={props.hideModal}
          deleteNote={props.deleteNote}
          noteID={props.note._id}
        />
        <button type="button" onClick={props.showModal}>delete</button>
      </Section>
      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>
    </Container>
  );
}
export default Note;
