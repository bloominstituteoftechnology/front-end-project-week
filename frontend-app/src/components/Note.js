import React from 'react';
import PropTypes from 'prop-types';
import './Note.css';

function Note(props) {
    return (
        <div className='Box'>
            <span>{props.note.title}</span>
            <p>{props.note.content}</p>
        </div>
    );
}

export default Note;