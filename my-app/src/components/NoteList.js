import React from "react";
import NotePreview from "./NotePreview";
import { Link } from "react-router-dom";

const NoteList = props => {
  return (
    <div className="note-list">
      {props.notes.map(note => {
        return (
          <Link to={`/${note._id}`} key={note._id}>
            <NotePreview note={note} />
          </Link>
        );
      })}
    </div>
  );
};
export default NoteList;
