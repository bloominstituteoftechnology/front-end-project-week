import React from 'react';
import "./Notes.css";
import NoteTitle from "./NoteTitle";
import NoteBody from "./NoteBody";

const Notes = ({props}) => (
  <div className="note-box">
    <NoteTitle />
    <NoteBody />
  </div>
);

export default Notes;
