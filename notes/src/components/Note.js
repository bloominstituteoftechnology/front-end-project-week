import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
    width:400px;
    height:150px;
    border: solid 1px white;
    margin:0 auto;
    padding: 0 2%;
`;


const Note = (props) => {

    return <NoteContainer>
        <h1>{props.note.title}</h1>
        <div>{props.note.note}</div>
    </NoteContainer>
}

export default Note;