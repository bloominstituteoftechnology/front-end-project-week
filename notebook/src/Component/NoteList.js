import React from "react";
import Note from "./Note";
// import { Link } from "react-router-dom";

const NoteList = props => {
  return (
    <React.Fragment>
      <h2>Your Notes</h2>
      {props.notes.map(note => (
        
          <Note key={note._id} note={note} />

      ))}
      
    </React.Fragment>
  );
};

export default NoteList;
