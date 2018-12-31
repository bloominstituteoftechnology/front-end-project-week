import React from 'react';

const Note = props => {
    return (
        <div className='notes-container'>
            <h1>{props.note.title}</h1>
            <p>{props.note.textBody}</p>
        </div>
    )
}

export default Note;