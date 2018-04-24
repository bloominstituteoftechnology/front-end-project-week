import React from "react";
import { Link } from "react-router-dom";

export const ViewNote = ({ match, notes, history, deleteNote }) => {
  const note = notes
    .filter(note => note.id === parseInt(match.params.id, 10))
    .shift();

  const handleDelete = event => {
    event.preventDefault();
    deleteNote(note.id);
    history.push("/");
  };
  return (
    <div className="col-9 right__side">
      <div className="row">
        <div className="notes__head">
          <h4>{note.title}</h4>
        </div>
        <div className="col-9 action__bar">
          <Link to={`/editNote/${match.params.id}`}>edit</Link>
          <a href="/" data-toggle="modal" data-target="#deleteModal">
            delete
          </a>
        </div>
      </div>
      <div className="row">
        <div className="notes__body">
          <p>{note.text}</p>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
