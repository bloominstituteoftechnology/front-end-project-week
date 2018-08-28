import React from "react";
import styled from "styled-components";

const NoteContainer = styled.div`
  width: 170px;
  height: 200px;
  border: 1px solid black;
  overflow: hidden;
  display: flex;
  align-content: flex-end;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
  box-sizing: border-box;
  h3 {
    border-bottom: 1px solid grey;
    font-size: 20px;
    font-weight: bold;
  }
  p {
    line-height: 2;
  }
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;

  width: 200px;
  display: inline-block;
`;
const Note = props => {
  return (
    <ParentDiv>
      <NoteContainer>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </NoteContainer>
    </ParentDiv>
  );
};

export default Note;
