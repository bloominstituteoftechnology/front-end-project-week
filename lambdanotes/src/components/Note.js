import React from 'react';

const Note = props => {
    let note = props.notes.find(note => note.id == props.match.params.id);
    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
        </div>
    );
};

export default Note;