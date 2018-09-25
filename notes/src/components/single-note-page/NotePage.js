import React from 'react';
import { Note } from './Note';
import { EditNote } from '../edit-note-page/EditNote';

export const NotePage = (props) => {
  const note1 = props.notes.find(note => note.id.toString() === props.match.params.id);
  return (
    props.editing ? <EditNote id={props.match.params.id} title={props.title} note={props.note} change={props.change} editComplete={props.editComplete} history={props.history} />
    : <Note note={note1} delete={props.delete} toggle={props.toggle} modal={props.modal} id={props.match.params.id} history={props.history} editStart={props.editStart} change={props.change} history={props.history} newTags={props.newTags} submitTags={props.submitTags} removeTag={props.removeTag} />
  )
}
