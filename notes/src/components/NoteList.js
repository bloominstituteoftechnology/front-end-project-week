import React from 'react';
import Note from './Note';

const NoteList = props => {
  return(
    <div>
      {props.notes.map(note => {
        return <Note key={note.id} note={note} />
      })}
    </div>
  )
}

export default NoteList;
