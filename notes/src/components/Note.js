import React from 'react';

const Note = (props) => {
    return (
        <div className = 'note-container' onClick={props.seekNote}>
            <div className = 'note-title'>{props.title}</div>
            <div className = 'note-divider'></div>
            <div className='note-content'>{props.textBody}</div>
        </div>
    )
}

export default Note;