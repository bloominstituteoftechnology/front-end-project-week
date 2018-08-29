import React from "react";
import Note from "./Note";
import { Route, Link } from "react-router-dom";

const NoteList = props => {
  return (
    <React.Fragment key={props._id}>
      <h2>Your Notes</h2>
      {props.notes.map(note => (
        <Note key={note._id} note={note} />
      ))}
    </React.Fragment>
  );
};

export default NoteList;
