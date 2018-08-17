import React from "react";
import { Link } from "react-router-dom";

const NoteList = ({ notes }) => {
  return (
    <div>
      <h1>Your Notes:</h1>
      {notes.map(note => (
        <Link to="/note/:id">
          <Note key={note.id} note={note} />
        </Link>
      ))}
    </div>
  );
};

export default NoteList;
