import React from "react";
import NotePreview from "./NotePreview";

const NoteList = props => {
  return (
    <div className="note-list">
      {props.notes.map(note => {
        return <NotePreview key={note._id} note={note} />;
      })}
    </div>
  );
};
export default NoteList;
