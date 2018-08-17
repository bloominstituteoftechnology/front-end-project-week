import React from "react";
import Note from "./Note";
import { Link } from 'react-router-dom';

const NoteList = props => (
  <div>
    <h1>Your Notes:</h1>
    {props.notes.map(note => (
      <Link to="/note/:id">
        <Note key={note.id} note={note} />
      </Link>
    ))}
  </div>
);

export default NoteList;
