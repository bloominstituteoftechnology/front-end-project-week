import React from 'react';
import styled from 'styled-components';
import Note from './Note.js';


const NoteListContainer = styled.div`
    width:405px;
    background:gray;
`;

const NoteList = (props) => {
    // console.log(props);
    
    return (
        <NoteListContainer>
            {
                props.notes.map((note)=>{
                    return <Note key={note.id} note={note} />
                })
            }
        </NoteListContainer>
    )
};

export default NoteList;