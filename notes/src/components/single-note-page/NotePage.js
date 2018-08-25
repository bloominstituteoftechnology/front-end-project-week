import React from 'react';
import { Note } from './Note';
import { EditNote } from '../edit-note-page/EditNote';

export const NotePage = (props) => {
  const note1 = props.notes.find(note => note._id === props.id);
  return (
    props.editing ? <EditNote {...props} id={props.id} title={props.title} note={props.note} change={props.change} editComplete={props.editComplete} /> : <Note {...props} note={note1} delete={props.delete} toggle={props.toggle} modal={props.modal} editStart={props.editStart} />
  )
}
