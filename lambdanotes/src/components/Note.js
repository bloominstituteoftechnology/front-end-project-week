import React from 'react';

function Note(props) {
    return(
        <div className='note'>
            <h2>{props.content.title}</h2>
            <div>{props.content.note}</div>
        </div>
    )
}

export default Note;