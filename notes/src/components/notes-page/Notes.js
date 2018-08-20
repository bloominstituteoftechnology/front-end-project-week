import React from 'react';
import { NoteCard } from './NoteCard';
import { EditNote } from '../edit-note-page/EditNote';

export const Notes = (props) => {
  console.log(props.notes);
  return (
    <div>
      <h3>Your Notes:</h3>
        {props.notes.map(note =>
          note.editing ? <EditNote note={note} /> : <NoteCard note={note} />
        )}
    </div>
  )
}
