import React from "react";
import Note from "./Note";
import styled from "styled-components";

const ListHeader = styled.h1`
color: #555;
margin:40px 10px;
padding: 5px;

`

const NoteList = ({ notes }) => {
  return (
    <div>
      <ListHeader>Your Notes:</ListHeader>
      {notes.map(note => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
