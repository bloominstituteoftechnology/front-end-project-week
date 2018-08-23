import React from 'react';
import { Note } from './Note';
import { EditNote } from '../edit-note-page/EditNote';

export const NotePage = (props) => {
  console.log(props.notes);
  const note1 = props.notes.find(note => note._id === props.id);
  console.log(note1);
  return (
    props.editing ? <EditNote id={note1.id} title={props.title} note={props.note} change={props.change} editComplete={props.editComplete} /> : <Note note={note1} delete={props.delete} toggle={props.toggle} modal={props.modal} editStart={props.editStart} />
  )
}
