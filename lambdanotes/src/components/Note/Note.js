import React from 'react';
import './Note.css';

const Note= props => {
    return (
        // <div className='note-container'>
            <div className='note-box'>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        // </div>
        
    );
};

export default Note;