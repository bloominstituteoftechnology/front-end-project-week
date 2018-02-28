import React from "react";
import styled from "styled-components";

const NoteStyled = styled.div`
  background-color: white;
  padding: 15px;
  margin: 10px;
  h4 {
    font-weight: bold;
    border-bottom: 1px solid black;
  }
  p {
  }
`;

function Notes(props) {
  return (
    <NoteStyled onClick={props.onClick}>
      <h4 onClick={props.onClick}>{props.note.title}</h4>
      <p onClick={props.onClick}>{props.note.text}</p>
    </NoteStyled>
  );
}

export default Notes;
