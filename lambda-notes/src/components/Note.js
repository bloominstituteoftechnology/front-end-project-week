import React from "react";
import styled from "styled-components";


const NoteCard = styled.div`
  box-sizing: border-box;
  width: 190px;
  height: 195px;
  margin: 23px 14px 0 0;
  padding: 12px 15px 28px;
  border: 1px solid #afafaf;
  background: white;
  overflow: hidden;
  h5 {
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #afafaf;
    word-wrap: break-word;
    padding-bottom: 10px;
  }
  p {
    margin: 10px 0 20px;
    line-height: 2;
    word-wrap: break-word;
    font-size: 12px;
    overflow: hidden;
    padding-bottom: 10px;
  }
`;

const Note = props => {
  
  return (
    <div>
      <NoteCard>
        <h5>{props.note.title}</h5>
        <p>{props.note.textBody}</p>
      </NoteCard>
      
    </div>
  );
};

export default Note;
