import React from "react";
import styled from "styled-components";

const NoteCard = styled.div`
  box-sizing: border-box;
  width: 190px;
  height: 195px;
  margin: 23px 14px;
  padding: 12px 15px 28px;
  border: 1px solid #afafaf;
  background: white;
  overflow: hidden;
  h5 {
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #afafaf;
    word-wrap: break-word;
  }
  p {
    line-height: 1.5;
    word-wrap: break-word;

    overflow: hidden;
    padding-bottom: 10px;
  }
`;

const Note = props => {
  return (
    <NoteCard>
      <h5>{props.note.title}</h5>
      <p>
        {props.note.textBody}
      </p>
    </NoteCard>
  );
};

export default Note;
