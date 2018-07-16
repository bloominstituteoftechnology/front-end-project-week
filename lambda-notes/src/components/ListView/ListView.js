import React from "react";
import NoteCard from "./NoteCard";

const ListView = props => {
  return (
    <div>
      <h2>Your Notes:</h2>
      {/* Iterate over a list of notes here */}
      {props.notes.map(note => <NoteCard key={note.id} note={note} />)}
      {/* <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard /> */}
    </div>
  );
};

export default ListView;
