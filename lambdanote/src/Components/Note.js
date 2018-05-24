import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css';

const Note = props => {
    return (    
        <div className = 'note'>
            <Link to={`/note/${props.note.id}`}>
            <h4 style={{ color: 'black' }}>{props.note.title}</h4>
            </Link>
            <hr />
            <p>{props.note.text}</p>
         </div>
    )
}


export default Note;