import React from 'react';
import { Link } from 'react-router-dom';



const Note = props => {
    return (
        <Link to={`/ExpandedNote/${props.id}`} className='note' onClick={() => props.passThisNote(props)}>
            <h2>{props.title}</h2>
            <div>{props.text}</div>
        </Link>
    )
}

export default Note;