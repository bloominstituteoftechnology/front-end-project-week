import React from 'react';
import styled from 'styled-components';
import Note from './Note';

const NoteListContainer = styled.div`
    width: 90%;
    column-count: 1;
    column-gap: 8px;
    margin: 0 auto;
    position: relative;
    @media (min-width: 625px) {
        width: 500px;
        column-count: 2;
    }
    @media (min-width: 1115px) {
        width: 750px;
        column-count: 3;
    }
    .title-seperator {
        color: #5f6368;
        font-family: Roboto,Arial,sans-serif;
        letter-spacing: 0.8px;
        font-size: 10px;
        font-weight: 600;
        position: absolute;
        left: 8px;
        top: -25px;
    }
`;

const NoteList = ({ notes, noteClicked, history}) => {
    // if (!notes.length) return <h2>Loading Notes ...</h2>;
    return (
        <NoteListContainer>
            <span class="title-seperator">NOTES</span>
            {notes.map(note => 
                <Note 
                    note={note} 
                    key={note._id} 
                    noteClicked={e => noteClicked(e, note._id, history)}
                />)
            }
        </NoteListContainer>
    );
}

export default NoteList;
