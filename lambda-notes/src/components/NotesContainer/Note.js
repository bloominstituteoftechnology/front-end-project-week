import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`

`

const Notes = styled.div`
width: 200px;
padding: 0 12px;
border: 1px solid black;
margin: 20%;
`

const NoteName = styled.h2`

`

const NoteText = styled.p`

`

const Note = (props) => {
    console.log(props)
    return (<NoteContainer>

        {props.note.map((note, index) => {
            return <Notes key={index}>
                <NoteName>{note.noteName}</NoteName>
                <hr />
                <NoteText>{note.noteText}</NoteText>
            </Notes>
        })}

    </NoteContainer>);
}

export default Note;