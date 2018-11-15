import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div `
max-width: 4500px;
width: 90%;
border: 1px solid black;
display:flex;
flex-direction: column;
height: 100px;
width: 300px;
overflow: hidden;
margin-top:20px
 h1{
 font-size:  1.8rem;
}
`

const Note = props =>{
    return(
        <NoteContainer>

            <h1>{props.note.title}</h1>
            <p> {props.note.textBody}</p>
            {props.note.tags.map(item => <p>item</p>)}
        </NoteContainer>
    )
}
export default Note;