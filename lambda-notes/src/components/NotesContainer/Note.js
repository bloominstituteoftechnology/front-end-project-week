import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, Link } from 'react-router-dom';
import ViewNote from '../NoteActions/ViewNote';

const NoteContainer = styled.div`

`

const Notes = styled.div`
// width: 200px;
// padding: 0 12px;
// border: 1px solid black;
// margin: 20%;
// display: inline-block;
`

const NoteName = styled.h2`

`

const NoteText = styled.p`

`

const Note = (props) => {
    console.log(props.note)
    return (<NoteContainer className='col'>

        {props.note.map((note, index) => {
            return <NavLink to={`/view/${note.id}`}>
                <Notes key={index}>
                    <NoteName>{note.noteName}</NoteName>
                    <hr />
                    <NoteText>{note.noteText}</NoteText>
                </Notes>
            </NavLink>
        })}
    </NoteContainer>);
}

export default Note;