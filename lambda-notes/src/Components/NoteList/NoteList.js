import React from "react";

import NoteBox from "../NoteBox/NoteBox";
import "./NoteList.css";

const NoteList = props => {
  return (
    <div className="note-list-container">
      <h2>Your Notes:</h2>
      {props.notes.map(note => {
        return (
          <div className="note-box" key={note._id}>
            <NoteBox title={note.title} textBody={note.textBody} />
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
