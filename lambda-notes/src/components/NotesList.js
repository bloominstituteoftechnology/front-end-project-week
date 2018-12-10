import React from 'react';
import SmallNote from './SmallNote';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NotesContainer = styled.div`
    padding: 3rem;
    margin-left: 22rem;

    h2 {
        margin: 3rem 0;
        font-size: 2rem;
        font-weight: bold;
    }
`

const YourNotes = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const NotesLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const NotesList = props => {
    return(
        <NotesContainer>
            <h2>Your Notes:</h2>
            <YourNotes>
                {props.notes.map(note => (
                    <NotesLink key={note._id} exact to={`/note/${note._id}`}>
                        <SmallNote  noteData={note} />
                    </NotesLink>
                ))}
            </YourNotes>
        </NotesContainer>
    );
} 

export default NotesList;