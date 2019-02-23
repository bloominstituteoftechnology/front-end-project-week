import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 28%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;
  border: 2px solid grey;
  background-color: white;
  h3 {
    font-size: 1.5rem;
    margin: 3px auto 8px;
  }
  p {
    font-size: 1.2rem;
    margin: 0px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    word-wrap: break-word;
    
  }
`;

const NoteCard = props => {
  return (
    <CardDiv onClick={() => props.gotoSingleNote(props.note.id)}>
      <h3>{props.note.title}</h3>
      <p>{props.note.textBody}</p>
    </CardDiv>
  );
};

export default NoteCard;