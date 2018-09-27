import React from "react";

export default function SingleNote(props) {
  console.log("single note", props);
  const note = props.notesList.find(note => note._id === props.match.params.id);
  console.log("note", note);

  function handleDelete() {
    props.handleDeleteNote(note._id);
    props.history.push("/");
  }

  return (
    <div className="single-note">
      <h3>{note.title}</h3>
      <p>{note.textBody}</p>
      <button onClick={handleDelete}>Delete</button>
      <button
        onClick={event => {
          event.preventDefault();
          console.log("NOTE ID", note._id);
          props.goToUpdateForm(event, note._id);
        }}
      >
        Edit
      </button>
    </div>
  );
}
