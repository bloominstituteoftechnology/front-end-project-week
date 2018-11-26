import React from "react";
import Note from "./Note";
import Sortable from "react-sortablejs"

const NoteList = props => {
  return (
      <Sortable tag="div" className="note-list">
        {props.notes.map(note => (
          <Note key={note._id} note={note} />
        ))}
      </Sortable>
  );
};

export default NoteList;