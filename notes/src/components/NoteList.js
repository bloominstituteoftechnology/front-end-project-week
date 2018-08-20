import React from 'react';
import NoteBox from './NoteBox';

const NoteList = props => {
  return(
    <div className="notes-list">
      <p>Your Notes: </p>
      {props.notes.map(note=><NoteBox key={note.id} {...note} />)}
    </div>
  );
}

export default NoteList;
