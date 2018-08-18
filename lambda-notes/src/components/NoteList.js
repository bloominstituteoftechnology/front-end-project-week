import React from "react";
import Note from "./Note";
import { Link } from 'react-router-dom';

const NoteList = props => (
  <div>
    <h1>Your Notes:</h1>
    {props.notes.map(note => (
      <Link key={note._id} to={`/note/${note._id}`}>
        <h1>{note.title}</h1>
        <p>{note.textBody}</p>
      </Link>
    ))}
  </div>
);

export default NoteList;
