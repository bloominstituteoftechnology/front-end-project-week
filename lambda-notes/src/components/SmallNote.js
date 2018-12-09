import React from 'react';

const SmallNote = props => {
    return(
        <div className='individual-note' onClick={() => props.history.push(`/note/${props.noteData._id}`)}>
            <h3 className='note-title'>{props.noteData.title}</h3>
            <p className='note-text'>{props.noteData.textBody}</p>
        </div>
    );
}

export default SmallNote;