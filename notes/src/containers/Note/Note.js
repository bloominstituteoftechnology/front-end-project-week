import React from "react";
import styled from "styled-components";

const NoteCard = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  padding: 0px 10px;
  width: 180px;
  height: 250px;
  margin: 0px 20px;
  background-color: white;
  h1 {
    font-size: 24px;
  }
  p {
      overflow:hidden;
      line-height:30px;
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
