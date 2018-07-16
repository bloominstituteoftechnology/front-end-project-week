import React, { Component } from 'react';
import styled from 'styled-components';
import NoteCard from '../components/NoteCard';
import data from '../demoData';

const StyledNotesContainer = styled.div`
    padding: 5%;
    background: #F3F3F3;
    width: 100%;
`;

const StyledNotes = styled.div`
    display: flex;
    flex-flow: row wrap;

`;

const NotesContainer = props => {
        return(
            <StyledNotesContainer>
                <h3>Your Notes:</h3>
                <StyledNotes>
                    {props.notes.map(note => {
                        return <NoteCard note={note}
                                        key={note.id} />
                    })}
                </StyledNotes>
            </StyledNotesContainer>
        );
}

export default NotesContainer;