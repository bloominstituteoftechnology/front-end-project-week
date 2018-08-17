import React from "react";
import Note from "./Note";
import { Link } from 'react-router-dom';

const NoteList = props => (
  <div>
    <h1>Your Notes:</h1>
    {props.notes.map(note => (
      <Link key={note.id} to="/note/:id">
        <Note note={note} />
      </Link>
    ))}
  </div>
);

export default NoteList;
