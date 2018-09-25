import React from "react";

export default function SingleNote(props) {
  console.log("single note", props);
  const note = props.notesList.find(note => note._id === props.match.params.id);
  console.log("note", note);
  return (
    <div>
      <p>Title: {note.title}</p>
      <p>Text Body: {note.textBody}</p>
    </div>
  );
}
