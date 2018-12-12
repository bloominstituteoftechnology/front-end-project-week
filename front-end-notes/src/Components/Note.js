import React from "react";
import styled from "styled-components";


const NoteStyle = styled.div`
border: 2px solid white
width: 300px;
height: 300px;
margin: 10px 10px 10px 10px;
`;



const Note = props => {
  return (
    
    <NoteStyle onClick= {() => props.history.push(`/notes/${props.note._id}`)}>
        
      <h2>{props.note.title}</h2>
      <p>{props.note.textBody}</p>

    </NoteStyle>
   
  );
};

export default Note;
