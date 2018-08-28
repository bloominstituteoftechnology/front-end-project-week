import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, Link } from 'react-router-dom';
import ViewNote from '../NoteActions/ViewNote';

const Header = styled.h2`
padding-left: 5%;
font-weight: bold;
margin-top: 1rem;

`

const NoteContainer = styled.div`
display: inline-flex;
flex-wrap: wrap;
width: 76vw;
background: #f2f1f2;
`

const Notes = styled.div`
width: 15vw;
padding: 0 12px;
border: 1px solid black;
margin-left: 10%;
display: inline-block;
background: white;
`

const NoteName = styled.h2`
max-width: 80%;
`

const NoteText = styled.p`
max-width: 80%;
`

const Note = (props) => {
    console.log(props.note)
    return (<div>
        <Header>Your Notes: </Header>

        <NoteContainer>
        {props.note.map((note, index) => {
            return <NavLink to={`/view/${note.id}`} style={{margin: '2%', color: 'black', textDecoration: 'none'}}>
                <Notes key={index}>
                    <NoteName>{note.noteName}</NoteName>
                    <hr />
                    <NoteText>{note.noteText}</NoteText>
                </Notes>
            </NavLink>
        })}
    </NoteContainer></div>);
}

export default Note;