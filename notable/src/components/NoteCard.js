import React from "react";
import styled from 'styled-components';

const CardDiv = styled.div`
    width: 20%;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h3 {
        font-size: 1.2rem;
        margin: 3px auto 8px;
    }

    p { 
        margin: 0px 5px;
    }
`;


const NoteCard = props => {
    const truncatedText = props.note.textBody;
  return (
  <CardDiv>
      <h3>{props.note.title}</h3>
      <p>{props.note.textBody}</p>
  </CardDiv>);
};

export default NoteCard;