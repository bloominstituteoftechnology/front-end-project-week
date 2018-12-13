import React from "react";
import { Link } from "react-router-dom";
import './Components.css';

const SingleNote = props => {
  if (props.notes.length) {
    let note = props.notes.find(
      note => `${note.id}` === props.match.params.id
    );
    const deleteNotes = () => {
      props.deleteNote(note.id);
      props.history.push("/");
    };
    const deleteAndToggle = () => {
      deleteNotes();
      props.toggleDeletingOff();
    }
    return (
      <div className="singleNote">
        {props.deleting && (
          <div className="deleteModal">
            <p>Are you sure you want to delete this?</p>
            <div className="button-div">
              <button className="delete-button" onClick={deleteAndToggle}>
                Delete
              </button>
              <button className="no-button" onClick={props.toggleDeletingOff}>
                No
              </button>
            </div>
          </div>
        )}
        <h5 className="editDelete">
          <Link
            to={`/note/${note.id}/edit`}
            onClick={() => props.editingNote(note.title, note.content)}
          >
            edit
          </Link>{" "}
          <span onClick={props.toggleDeletingOn}>delete</span>
        </h5>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    );
  } else {
    return <h2>Loading Note...</h2>;
  }
};

export default SingleNote;
