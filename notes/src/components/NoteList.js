import React from 'react';
import NoteBox from './NoteBox';
import { Link } from 'react-router-dom';

const NoteList = props => {
  return(
    <div className="notes-list">
      <p>Your Notes: </p>
      {props.notes.map(note=><Link to={`/note/${note.id}`}><NoteBox key={note.id} {...note} /></Link>)}
    </div>
  );
}

export default NoteList;
