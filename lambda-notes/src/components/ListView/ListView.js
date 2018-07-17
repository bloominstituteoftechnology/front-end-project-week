import React from "react";
import NoteCard from "./NoteCard";

const ListView = props => {
  return (
    <div>
      <h2>Your Notes:</h2>
      {props.notes.map(note => <NoteCard key={note.id} note={note} />)}
    </div>
  );
};

export default ListView;
