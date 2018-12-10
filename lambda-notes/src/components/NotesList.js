import React from 'react';
import styled from 'styled-components';

import NoteCard from './NoteCard';

const NotesListDiv = styled.div`
    border: 1px solid gray;
    background-color: #F2F1F2;
    width: 685px;
    max-height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const NotesListTitle = styled.div`
    width: 100%;
    margin: 5.5rem 2.5rem;
    margin-bottom: 1.75rem;
    font-size: 2rem;
    font-weight: bold;
`

const NoteCardDisplay = styled.div`
    margin-left: 1rem;
    max-width: 965px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
`

export default function NotesList(props) {
    return (
        <NotesListDiv>
            <NotesListTitle>
                Your Notes:
            </NotesListTitle>
            <NoteCardDisplay>
                {(props.fetching) ? (<p>Loading...</p>) :
                    (props.notes.map(note => 
                        { return <NoteCard note={note} /> }
                    ))
                }
            </NoteCardDisplay>
        </NotesListDiv>
    );
}