import React from 'react';

const Note = props => {
    return(
        <div className='individual-note'>
            <h3 className='note-title'>{props.noteData.title}</h3>
            <p className='note-text'>{props.noteData.textBody}</p>
        </div>
    );
}

export default Note;