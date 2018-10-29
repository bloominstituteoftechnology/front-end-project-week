import React from 'react';

const Note = props => {
    return (
        <div className='note'>
            <h2>{props.title}</h2>
            <div>{props.text}</div>
        </div>
    )
}

export default Note;