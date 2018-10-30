import React from 'react';
import styled from 'styled-components';
import Note from './Note';

const NoteListContainer = styled.div`
    width: 500px;
    column-count: 2;
    column-gap: 8px;
    margin: 0 auto;
`;

const NoteList = ({ notes, noteClicked, history}) => {
    if (!notes.length) return <h2>Loading Notes ...</h2>;
    return (
        <NoteListContainer>
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
