import React from 'react';
import Note from './Note';

const NotesList = props => {
    return (
        <>
            {props.notes.map(note => (
                <Note note={note} />
            ))}
        </>
    );
};

export default NotesList;
