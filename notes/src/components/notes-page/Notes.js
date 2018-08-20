import React from 'react';
import { NoteCard } from './NoteCard';

export const Notes = (props) => {
  return (
    <div>
      <h3>Your Notes:</h3>
        {props.notes.map(note =>
          <NoteCard key={note.id} note={note} />
        )}
    </div>
  )
}
