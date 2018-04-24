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

      {/* modal */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this?
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="modal_btn del_btn"
                data-dismiss="modal"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                type="button"
                className="modal_btn no_btn"
                data-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
