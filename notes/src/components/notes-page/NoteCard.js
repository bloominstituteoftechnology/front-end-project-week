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
        <div onClick={() => {console.log(props.note); props.noteView(props.note._id)}}>
          <h4>{props.note.title.substring(0, 30)}...</h4>
          <P>{props.note.textBody.substring(0, 70)}...</P>
        </div>
      </NoteCardContainer>
  )
}
