import React from 'react';
import { Link } from 'react-router-dom';
    
const ExpandedNote = props => {
    return (
        <div className='expandedNote'>
            <div>
                <Link to={`/editNote/${props.expandedNote.id}`}>edit</Link>
                <Link to={'/delete'}>delete</Link>
            </div>
            <h1>{props.expandedNote.title}</h1>
            <p>{props.expandedNote.text}</p>
        </div>
    )
}

export default ExpandedNote;
