import React from 'react';
import { Link } from 'react-router-dom';



const Note = props => {
    console.log('props', props);
    return (
        <Link to={`/ExpandedNotes/${props.id}`} className='note'>
            <h2>{props.title}</h2>
            <div>{props.text}</div>
        </Link>
    )
}

export default Note;