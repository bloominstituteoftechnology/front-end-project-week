import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 28%;
  height: 200px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;
  background-color: white;
  h3 {
    font-size: 1.4rem;
    margin: 3px auto 8px;
  }
  p {
    font-size: 1.2rem;
    margin: 0px 5px;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
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