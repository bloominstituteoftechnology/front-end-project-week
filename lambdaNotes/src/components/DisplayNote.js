import React from "react";
import { NavLink } from "react-router-dom";

const DisplayNote = props => {
  let note = "";

  if (props.match.params.id) {
    note = props.notes.filter(item => item._id === props.match.params.id);
    note = note[0];
    console.log("displayNote  note = ", note);
  } else {
    alert("wrong note ID");
    props.history.push("/");
  }

  const displayItem = note ? (
    <div>
      <h3> {note.title} </h3>
      <p> {note._id} </p>
      <p> {note.textBody} </p>
    </div>
  ) : (
    <h3> Loading... </h3>
  );

  return (
    <div className="displayNote">
      <nav className="displayNoteNav">
        <NavLink to={`/edit/${props.match.params.id}`}> Edit </NavLink>
        <NavLink to={`/Notes/${props.match.params.id}/delete`}>Delete</NavLink>
      </nav>

      {displayItem}
    </div>
  );
};

export default DisplayNote;
