import React from "react";
import styled from "styled-components";

const NoteCard = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  overflow-wrap: break-word;
  margin: 40px 20px;
  background-color: white;
  h1 {
      font-size: 20px;

  }
`;

const Note = ({ note }) => {
  return (
    <NoteCard>
      <h1>{note.title}</h1>
      <hr />
      <p>{note.textBody}</p>
    </NoteCard>
  );
};

export default Note;
