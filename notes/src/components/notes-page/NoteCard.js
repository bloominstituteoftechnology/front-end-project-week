import React from 'react';
import styled from 'styled-components';
import { Col } from 'reactstrap';

const NoteCardContainer = styled(Col) `
  height: 150px;
  border: 1px solid gray;
  margin: 10px;
  padding-bottom: 5px;
`;

const P = styled.p `
  font-size: 15px;
`;

export const NoteCard = (props) => {
  return (
      <NoteCardContainer xs='3'>
        <div onClick={props.noteView(props.note.id)}>
          <h4>{props.note.title}</h4>
          <P>{props.note.textBody.substring(0, 70)}...</P>
        </div>
      </NoteCardContainer>
  )
}
