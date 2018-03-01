import React from "react";
import styled from "styled-components";

const NoteStyled = styled.div`
  background-color: white;
  padding: 15px;
  margin: 10px;
  width: 150px;
  height: 180px;
  h4 {
    font-weight: bold;
    border-bottom: 1px solid black;
    margin-bottom: 8px;
  }
  p {
    font-family: 'Raleway';
    font-size: 13px;
    overflow: hidden;
    position: relative;
    line-height: 16px;
    max-height: 160px;
    margin-right: -13px;
    padding-right: 13px;
    :before {
      content: '...';
      position: absolute;
      right: 8px;
      bottom: 0;
    }
    :after {
      content: '';
      position: absolute;
      right: 8px;
      width: 13px;
      height: 13px;
      margin-top: 3px;
      background: white;
    }
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
