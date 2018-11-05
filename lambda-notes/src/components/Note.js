import React from 'react';
import './Note.css';

function Note(props){
    return (
        <div className = "Note">
            <h2>{props.tags}</h2>
            <h3>{props.title}</h3>
            <hr/>
            <p>{props.textBody}</p>

        </div>
    )
}

export default Note;