import React from "react";
import Note from "./Note";
// import { Link } from "react-router-dom";

const NoteList = props => {
  return (
    <div className="notes">
      <h2>Your Notes</h2>
       <div className="note-cards">
       {props.notes.map(note => (
          <Note key={note._id} note={note} />
        ))}
       </div>
        
    </div>
  );
};

export default NoteList;

//  in notes (where I'm mapping):

//  <Link to={`/notes/${note._id}`} >
//  <Note note={note} />
//  </Link>
