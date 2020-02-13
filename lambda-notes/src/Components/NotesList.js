import React from 'react';
import NoteCard from './NoteCard';
import styled from 'styled-components';

const NotesListTitleStyledh1 = styled.h1`
    font:Roboto Bold;
    font-size:24px;
    font-weight:bold;
    margin: 30px 0px 20px 10px;
    padding-left:5px;
    color:#4A4A4A;
    width:100%
`

const NotesListContainerStyledDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    width: 680px;
    background-color: #F3F3F3;
    // background-color:#D3D7DA;
`

const NotesList = props => {
    return (
        <NotesListContainerStyledDiv>
            <NotesListTitleStyledh1>Your Notes:</NotesListTitleStyledh1>
            {props.noteEntries.map(noteEntry => {
                return (
                    <NoteCard
                        noteEntry = {noteEntry}
                        key = {noteEntry.id}
                    />
                );
            })}
        </NotesListContainerStyledDiv>
    );
}

export default NotesList;


// some additional things you might need:
// Heading font: Roboto Bold
// Everything else font: Raleway Medium

// Heading and main font color: #4A4A4A
// Button font color: #FFFFFF

// Sidebar background: #D8D8D8
// Main background: #F3F3F3
// Main button background: #2BC1C4
// Delete button background: #D0021B
// Border color used throughout: #979797