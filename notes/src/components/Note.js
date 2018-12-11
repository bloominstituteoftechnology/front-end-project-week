import React from 'react';

const Note = props => {
    return(
        <div className='note-container'>
            

            <h2>{props.note.title}</h2>
            <p>{props.note.textBody}</p>
        </div>
    )
}

export default Note;