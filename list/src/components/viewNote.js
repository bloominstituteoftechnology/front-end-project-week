import React from "react";
import { Link } from "react-router-dom";
import "./viewNote.css";

export const ViewNote = props => {
  // display a maximized version of the title and content of note clicked
  console.log(props);
  const btn = document.getElementsByClassName("modalButton");
  const confirmModal = document.getElementsByClassName("confirmModal");
  window.onclick = function(event) {
    if (event.target === confirmModal[0]) {
      confirmModal[0].style.display = "none";
    }
  };
  console.log(confirmModal);
  return (
    <div>
      <div className="updateButtons">
        <Link to={`/editnote/${props.notes.id}`}>
          <button> Edit Note </button>
        </Link>
        <button
          onClick={() => (confirmModal[0].style.display = "flex")}
          className="modalButton"
        >
          {" "}
          Delete Note{" "}
        </button>
      </div>
      <div className="confirmModal">
        <div className="modal-content">
          <h4> Are you sure you want to delete this note? </h4>
          <Link to="/">
            <button
              className="sideButton"
              onClick={() => props.deleteNote(props.notes.id)}
            >
              {" "}
              Delete{" "}
            </button>
          </Link>
          <button
            className="sideButton"
            onClick={() => (confirmModal[0].style.display = "none")}
          >
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
      <h1> {props.notes.title} </h1>
      <div>{props.notes.content}</div>
    </div>
  );
};
