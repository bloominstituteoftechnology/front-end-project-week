import React from 'react';
import { Link } from 'react-router-dom';
import './Note.css';



const Note = props => {
    return (
        <Link to={`/ExpandedNote/${props.id}`} className='note' onClick={() => props.passThisNote(props)}>
            <h2>{props.title}</h2>
            <div>{(props.text.length > 150) ? `${props.text.slice(0, 150)}...` : props.text}</div>
        </Link>
    )
}

export default Note;
