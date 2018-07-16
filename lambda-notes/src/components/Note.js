import React from 'react';
import '../styles/Note.css';

const Note = props => {
    return (
        <div className='note'>
            <p className='title'>{props.title}</p>
            <p className='body'>{props.body}</p>
        </div>
    )
}

export default Note;