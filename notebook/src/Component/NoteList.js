import React from "react";
import Note from './Note';


const NoteList = props => {
  return (
    <div>
      <h2>Your Notes</h2>
      {props.notes.map(note => (
        <Note key={note.id}  note={note} />
      ))}
    </div>
  );
};

export default NoteList;
