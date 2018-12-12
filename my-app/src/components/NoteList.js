import React from "react";
import NotePreview from "./NotePreview";
import { Link } from "react-router-dom";

const NoteList = props => {
  return (
    <div className="notes-list">
      <h3>Your Notes:</h3>
      {props.notes.map(note => {
        return (
          <Link to={`/${note.id}`} key={note.id}>
            <NotePreview note={note} />
          </Link>
        );
      })}
    </div>
  );
};
export default NoteList;
