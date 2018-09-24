import React from 'react';

const Note = (props) => {
    return (
        <div className = 'note-container' onClick={props.seekNote}>
            <div className = 'note-title'>{props.title}</div>
            <div className='note-content'>{props.textBody}</div>
            <div className ='note-id'>{props._id}</div>
        </div>
    )
}

export default Note;