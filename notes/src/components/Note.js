import React from 'react';

let Note = props => {
    return (
        <div className='note'>
            <h2>{props.note.title}</h2>
            <p>{props.note.textBody}</p>
            <span onClick={() => props.deleteHandler(props.note._id)}>X</span>
        </div>
    )
}

export default Note;