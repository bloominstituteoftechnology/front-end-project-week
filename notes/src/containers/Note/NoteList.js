import React from "react";
import Note from "./Note";
import styled from "styled-components";

const Header = styled.h1`
color: #555;
margin:40px 10px;
padding: 5px;

`

const NoteList = ({ notes }) => {
  return (
    <div>
      <Header>Your Notes:</Header>
      {notes.map(note => (
        <Note note={note} key={note._id} />
      ))}
    </div>
  );
};

export default NoteList;
