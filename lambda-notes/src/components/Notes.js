import React from "react";
import NoteStyled from "../styling/NoteStyled";

function Notes(props) {
  return (
    <NoteStyled>
      <h4>{props.note.title}</h4>
      <p>{props.note.text}</p>
    </NoteStyled>
  );
}

export default Notes;
