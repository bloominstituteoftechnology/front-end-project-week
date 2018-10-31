import React from 'react';
import { StyledCard, StyledH5, CardP } from './styles';

function NoteCard(props) {
  return (
    <StyledCard>
      <StyledH5>{props.note.title}</StyledH5>
      <CardP>{props.note.textBody}</CardP>
    </StyledCard>
  );
}

export default NoteCard;
