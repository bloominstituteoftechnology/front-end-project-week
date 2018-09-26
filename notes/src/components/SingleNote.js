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
    <div>
      <p>Title: {note.title}</p>
      <p>Text Body: {note.textBody}</p>
      <button onClick={handleDelete}>Delete</button>
      <button
        onClick={event => {
          event.preventDefault();
          props.goToUpdateForm(event, note.id);
        }}
      >
        Edit
      </button>
    </div>
  );
}
