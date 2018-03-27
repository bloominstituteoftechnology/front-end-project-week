import React from "react";
import { Link } from "react-router-dom";
import DeleteNotes from "./DeleteNotes.js";

const Notes = props => {
  const handleDelete = () => {
    props.history.push("/");
  };

  return (
    <div className="noteView">
      <div className="note">
        <Link
          to={`/notes/${props.location.state.currentNote.id}/EditNotes`}
          className="edit"
        >
          edit
        </Link>
        <DeleteNotes delete={handleDelete} />
      </div>
      <h5 className="noteTitle">{props.location.state.currentNote.title}</h5>
      <h5 className="noteContent">{props.location.state.currentNote.text}</h5>
    </div>
  );
};

export default Notes;
