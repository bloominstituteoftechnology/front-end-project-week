import React from 'react';
import { Link } from 'react-router-dom';

import {
  NotesContainer,
  SubHeading,
  NotesWrapper,
  NoteCard,
  TitleHeading,
  Hr,
  TextBody
} from './Styles';

const NotesList = props => {
  return (
    <NotesContainer>
      <SubHeading>Your Notes:</SubHeading>

      <NotesWrapper>
        {props.notes.map((note, i) => (
          <NoteCard key={i}>
            <Link to={`/notes/${note._id}`} style={{ color: '#000' }} >
              <TitleHeading>{note.title}</TitleHeading>
            </Link>
            <Hr />
            <TextBody>{note.textBody}</TextBody>
          </NoteCard>
        ))}
      </NotesWrapper>

    </NotesContainer>
  );
};

export default NotesList;