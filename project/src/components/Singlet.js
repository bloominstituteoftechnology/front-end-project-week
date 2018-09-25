import React from "react";

export default function SingleNote(props) {
  const note = props.notesList.find(
    note => note._id === props.match.params.noteId
  );
  return (
    <div>
      <p>Title: {note.title}</p>
      <p>Text Body: {note.textBody}</p>
    </div>
  );
}
