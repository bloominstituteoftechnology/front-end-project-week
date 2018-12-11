import React from "react";
import Note from "./Note";
import Search from "./Search";

const NotesList = props => (
  <div className="notes-list">
  <Search search={props.search} changeHandler={props.changeHandler} />
    <h3 className="your-notes">Your Notes:</h3>
    <div className="notes">
      {props.notes.map((note, index) => (
        <Note note={note} key={index} />
      ))}
    </div>
  </div>
);

export default NotesList;
