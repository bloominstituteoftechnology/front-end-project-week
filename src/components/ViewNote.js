import React from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ViewNote = props => {
  // console.log("from viewNote...", props);
  const id = props.match.params.id;
  const note = props.notes.filter(el => el.id == id)[0];
  // console.log("from viewNote...", note);

  const handleDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="delete">
            <p>Are you sure You want to delete this note?</p>
            <div className="delete-btns">
              <button
                onClick={() => {
                  props.delete(id);
                  onClose();
                }}
                className="deleteBtn"
              > Delete</button>

              <button
                onClick={() => {
                  onClose();
                }}
                className="noBtn"
              >No</button>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="container1">
      <div>
        <div className="single-header">
          <div className="single-header-link">
            <Link to={`/edit/${id}`}>
              <div>Edit</div>
            </Link>
          </div>
          <div className="single-header-link">
            <Link to={"/"}>
              <div onClick={handleDelete}> Delete </div>{" "}
            </Link>
          </div>
        </div>

        <div className="single-note-title">
          <h2>{note.title}</h2>
        </div>
        <p>{note.content}</p>
      </div>
    </div>
  );
};

export default ViewNote;
