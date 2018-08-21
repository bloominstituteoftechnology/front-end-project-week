import React from 'react';
import { Note } from './Note';
import { EditNote } from '../edit-note-page/EditNote';

export const NotePage = (props) => {
  const note1 = props.notes.find(note => note.id.toString() === props.match.params.id);
  return (
    note1.editing ? <EditNote title={props.title} note={props.note} /> : <Note note={note1} delete={props.delete} id={props.match.params.id} history={props.history} />
  )
}
