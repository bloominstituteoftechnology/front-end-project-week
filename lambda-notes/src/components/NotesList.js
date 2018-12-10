import React from 'react';
import Note from './Note';

const NotesList = props => {
    return (
        <>
            {props.notes.length === 0 ? (
                <h1>Be patient we are loading the notes</h1>
            ) : (
                props.notes.map(note => <Note key={note._id} note={note} />)
            )}
        </>
    );
};

export default NotesList;
