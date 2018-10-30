import React from 'react';
import { Link } from 'react-router-dom';

import { NotesContainer, NotesWrapper, NoteCard } from './Styles';

const NotesList = props => {
  return (
    <NotesContainer>
      <h2>Your Notes:</h2>

      <NotesWrapper>
        {props.notes.map((note, i) => (
          <NoteCard key={i}>
            <Link to={`/notes/${note._id}`} >
              <h2>{note.title}</h2>
            </Link>
            <hr />
            <p>{note.textBody}</p>
          </NoteCard>
        ))}
      </NotesWrapper>

    </NotesContainer>
  );
};

export default NotesList;
