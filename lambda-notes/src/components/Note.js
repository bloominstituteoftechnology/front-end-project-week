import React from 'react';
import '../styles/Note.css';

// returns to NotesList how to display each note
const Note = props => {
    return (
        <div className='note'>
            <p className='title'>{props.title}</p>
            <p className='body'>{props.body}</p>
        </div>
    )
}

export default Note;