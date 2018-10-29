import React from "react";
import { Link } from "react-router-dom";

const SingleNote = props => {
  if (props.notes.length) {
    let note = props.notes.find(
      note => `${note._id}` === props.match.params.id
    );
    const deleteToNotes = e => {
      e.preventDefault();
      props.deleteNote(note._id);
      props.history.push("/");
    };
    return (
      <div>
        {props.isDeleting && (
          <div>
            <p>Are you sure you want to delete this?</p>
            <button onClick={deleteToNotes}>Delete</button>
            <button onClick={props.toggleOffDeleting}>No</button>
          </div>
        )}
        <p>
          <Link
            to={`/note/${note._id}/edit`}
            onClick={() => props.toEditNote(note.title, note.textBody)}
          >
            edit
          </Link>{" "}
          <span onClick={props.toggleOnDeleting}>delete</span>
        </p>
        <h2>{note.title}</h2>
        <p>{note.textBody}</p>
      </div>
    );
  } else {
    return <h2>Loading Note...</h2>;
  }
};

export default SingleNote;
