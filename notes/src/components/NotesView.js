import React from "react";
import NotesList from "./NotesList";
import "../App.css";

export default function NotesView(props) {
  return (
    <div className="notesview">
      <div className="notesview-title"> Your Notes:</div>

      <div className="noteslist-group">
        <NotesList notes={props.notes} />
      </div>
    </div>
  );
}
