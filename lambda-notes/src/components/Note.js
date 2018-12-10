import React from 'react';
import { NoteWrapper } from '../style';

const Note = props => {
    const note = props.notes.find( note  => { return props.match.params._id === `${note._id}`})
        console.log(note)
    return (
        <NoteWrapper>
            <h2>{note.title}</h2>
            <p>{note.textBody}</p>
        </NoteWrapper>
    );
}

export default Note