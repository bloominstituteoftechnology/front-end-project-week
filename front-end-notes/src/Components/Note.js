import React from "react";
import styled from "styled-components";


const NoteStyle = styled.div`
border: 2px solid white
width: 300px;
height: 300px;
margin: 10px 10px 10px 10px;
font-size: 4rem;
padding: 0 20px;

h2 {
    font-weight: bold;
    font-size: 3rem;

}

hr {
    width: 100%;
margin-left: auto;
margin-right: auto;
}
`;



const Note = props => {
  return (
    
    <NoteStyle onClick= {() => props.history.push(`/notes/${props.note._id}`)}>
        
      <h2>{props.note.title}</h2>
      <hr></hr>
      <p>{props.note.textBody}</p>
      <p>{props.note.tags}</p>
    </NoteStyle>
   
  );
};

export default Note;
