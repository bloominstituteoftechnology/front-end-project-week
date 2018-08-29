import React from "react";
import { Link } from "react-router-dom";

const SingleNote = props => {
  const note = props.notes.find(note => note.id == props.match.params.id);
  return (
    <div className="single-note">
      <div className="delete">
        <Link className="editlink" to={`/notes/editnote/${props.match.params.id}`}>
          <p onClick={() => props.editHandler(props.match.params.id)}>edit</p>
        </Link>
        <Link to="/">
          <p onClick={() => props.noteDelete(props.match.params.id)}>delete</p>
        </Link>
      </div>
      <h1 className="single-title">{note.title}</h1>
      <div className="single-note">{note.text}</div>
    </div>
  );
};

export default SingleNote;
