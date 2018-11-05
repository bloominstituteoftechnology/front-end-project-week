import React from 'react';
import './Note.css';

const Note = props => {
    
    return (
        <div className = "Note">
            <h2>{props.tags}</h2>
            <h3>{props.title}</h3>
            
            <hr/>
            <p>{props.textBody}</p>
            <button onClick = {props.deleteNote}>Delete Note</button>
            <button onClick = {props.updateNote}>Update Note</button>
        </div>
    )
}

export default Note;