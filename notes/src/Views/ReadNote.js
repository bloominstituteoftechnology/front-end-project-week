import React from "react";
import { Link } from "react-router-dom";

function ReadNote(note) {
  return (
    <div className="full-page-note">
      <div>
        <Link to="/AddEditNote">edit</Link>
        <Link to="/DeleteModal">delete</Link>
      </div>
      <h1>{note.title}</h1>
      <p>{note.textBody}</p>
    </div>
  );
}

export default ReadNote;
