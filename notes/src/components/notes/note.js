import React from 'react';
import styled from 'styled-components';
const NoteContainer=styled.div`
width: 30%;
margin-right: 3%;
background-color: white;
border: 1px solid #ddd;
height: 200px;
margin-bottom: 20px;
text-align: left;
h3,p{
    margin-left: 10%;
    margin-right: 10%;
}
`
const Rule=styled.div`
width: 80%;
margin: 0 auto;
height: 2px;
background-color:#c6c6c6;
`
const Note=(props)=><NoteContainer><h3>{props.data.title}</h3><Rule/><p>{props.data.textBody}</p></NoteContainer>
export default Note;