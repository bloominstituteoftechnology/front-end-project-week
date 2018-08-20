import React from "react";
import "../CSS/notefocus.css";
import { Link } from "react-router-dom";

const NoteFocus = props => {
  const note = props.notes.find(note => note.id == props.match.params.id);
  return (
    <div className="focus">
      <div className={props.deleting ? "delete" : "hide-delete"}>
        <div className="modal">
          <p>Are you sure you want to delete this?</p>
          <div className="btns">
            <Link className="linkdel" to="/">
              <div
                onClick={() => props.noteDelete(props.match.params.id)}
                className="deletebtn"
              >
                Delete
              </div>
            </Link>
            <div onClick={props.deleteModal} className="nobtn">
              No
            </div>
          </div>
        </div>
      </div>
      <div className="edit-del">
        <Link className="linkedit" to={`/notes/edit/${props.match.params.id}`}>
          <p onClick={() => props.editNote(props.match.params.id)}>edit</p>
        </Link>
        <p onClick={props.deleteModal}>delete</p>
      </div>
      <h1 className="focustitle">{note.title}</h1>
      <div className="notetxt">{note.text}</div>
    </div>
  );
};

export default NoteFocus;
