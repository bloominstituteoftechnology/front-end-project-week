import React from 'react';
const Note = props => {
    return (
        <>
            <h1>{props.note.title}</h1>
            <p>{props.note.content}</p>
        </>
    );
};

export default Note;
