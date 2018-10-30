import React from "react";
import Note from "./Note";

import Search from "./Search";

const NotesList = props => (
  <div className="noteslist">
    <Search search={props.search} handleInput={props.handleInput} />
    <h2>Your Notes:</h2>
    <div className="notes">
      {props.notes.map((note, i) => (
        <Note note={note} key={i} />
      ))}
    </div>
  </div>
);

export default NotesList;
