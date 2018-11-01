import React from 'react';
import { StyledCard, StyledH5, CardP } from './styles';

function NoteCard(props) {
  return (
    <StyledCard>
      <StyledH5>{props.note.title}</StyledH5>
      <CardP source={props.note.textBody} />
    </StyledCard>
  );
}

export default NoteCard;
