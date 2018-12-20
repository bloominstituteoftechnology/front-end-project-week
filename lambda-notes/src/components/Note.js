import React from "react";
import styled from "styled-components";


const Styles = styled.div`
border: 2px solid darkgrey;
width: 300px;
height: 300px;
margin: 10px 10px 10px 10px;
font-size: 4rem;
padding: 0 20px;
overflow: hidden;
text-overflow: ellipsis;
h2 {
    font-weight: bold;
    font-size: 3rem;
}
hr {
    width: 200%;
margin-left: auto;
margin-right: auto;
}
`;



const Note = props => {
  return (
    
    <Styles onClick= {() => props.history.push(`/notes/${props.note._id}`)}>
        
      <h2>{props.note.title}</h2>  
      <p>{props.note.textBody}</p>
      <p>{props.note.tags}</p>
    </Styles>
   
  );
};

export default Note;