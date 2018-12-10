import React from 'react';

import { NoteEditIcon, NoteContainer, NoteTitle, NoteBody } from '../../styles'


const Note = ({ note, noteClicked }) => {
    return (
        <NoteContainer onClick={noteClicked}>
            <NoteEditIcon><i className="fas fa-pen-alt"></i></NoteEditIcon>
            <NoteTitle>{note.title}</NoteTitle>
            <NoteBody markdown={note.textBody}/>
        </NoteContainer>
    );
}

export default Note;

