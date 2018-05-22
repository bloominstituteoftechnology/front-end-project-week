import React from 'react';
import Title from '../Title';
import NoteForm from '../NoteForm';

const SaveNote = props => {
  return ( 
    <div className="save-note">
      <Title title={props.title} />
      <NoteForm action={props.action} noteId={(props.noteId !== undefined) ? props.noteId : null}/>
    </div>
  );
}

export default SaveNote;