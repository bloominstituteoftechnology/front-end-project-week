import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Col } from 'reactstrap';

const NoteCardContainer = styled(Col) `
  height: 150px;
  border: 1px solid gray;
  margin: 10px;
  padding-bottom: 5px;
`;

const NoteCardLink = styled(Link) `
  text-decoration: none;
  color: black;

  p {
    font-size: 15px;
  }
`;

export const NoteCard = (props) => {
  return (
      <NoteCardContainer xs='3'>
        <NoteCardLink to={`/notes/${props.note.id}`}>
          <h4>{props.note.title}</h4>
          <p>{props.note.note.substring(0, 70)}...</p>
        </NoteCardLink>
      </NoteCardContainer>
  )
}
