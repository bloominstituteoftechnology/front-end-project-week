import React from 'react';
import styled from 'styled-components';

import NoteCard from './NoteCard';

const NotesListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 4%;

    border: 1px solid black;

    h2{
        font-size: 2.2rem;
        margin: 55px 0 25px 0;
    }
`;

const NotesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

const NotesList = props=>{
    return(
        <NotesListContainer>
            <h2>Your Notes:</h2>
            <NotesContainer>
                {props.notes.map(note=><NoteCard key={note._id} {...props} note={note} setCurrentNote={props.setCurrentNote}/>)}
            </NotesContainer>
        </NotesListContainer>
    )
}

export default NotesList;