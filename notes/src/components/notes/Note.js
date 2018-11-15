import React from "react";
import NoteCard from "./NoteCard";

const Note = props => {
  const { notes } = props
  return (

  


    <div className="note-summary">
     <ul>
    {props.notes.map(note => {
      return <NoteCard key={note.id} note={note} />;
    })}
  </ul>
    </div>
  );
};
export default Note;
