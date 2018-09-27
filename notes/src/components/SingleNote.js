import React from "react";

export default function SingleNote(props) {
  const note = props.notesList.find(note => note._id === props.match.params.id);

  function handleDelete() {
    props.handleDeleteNote(note._id);
    props.history.push("/");
  }

  function confirmDelete() {
    let c = window.confirm("Are you sure you want to delete this note?");
    if (c == true) {
      handleDelete();
    } else {
      null;
    }
  }

  return (
    <div className="single-note">
      <h3>{note.title}</h3>
      <p>{note.textBody}</p>
      <button
        onClick={event => {
          event.preventDefault();
          props.goToUpdateForm(event, note._id);
        }}
      >
        Edit
      </button>
      <button className="delete" onClick={confirmDelete}>
        Delete
      </button>
    </div>
  );
}
