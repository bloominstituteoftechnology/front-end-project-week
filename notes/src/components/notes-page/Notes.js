import React from 'react';
import { NoteCard } from './NoteCard';
import styled from 'styled-components';
import { Row } from 'reactstrap';

const OuterNotesContainer = styled.div `
  width: 667.5px;
  display: flex;
  flex-direction: column;
`;

const NotesContainer = styled.div `
  display: flex;
  flex-flow: row wrap;
  margin: 0 40px;
  width: 100%;
`;

const H3 = styled.h3 `
  margin: 20px 0;
  text-align: left;
  padding-left: 20px;
`;

export const Notes = (props) => {
  return (
    <OuterNotesContainer>
      <H3>Your Notes:</H3>
      <NotesContainer>
        {props.notes.map(note =>
          <NoteCard key={note.id} note={note} noteView={props.noteView} />
        )}
      </NotesContainer>
    </OuterNotesContainer>
  )
}
