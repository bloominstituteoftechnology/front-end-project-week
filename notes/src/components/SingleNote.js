import React from "react";

export default function SingleNote(props) {
  console.log(props);
  const note = props.notesList.find(
    note => note._id === props.history.location.id
  );

  return (
    <div id={note._id}>
      <p>Title: {note.title}</p>
      <p>Text Body: {note.textBody}</p>
    </div>
  );
}
