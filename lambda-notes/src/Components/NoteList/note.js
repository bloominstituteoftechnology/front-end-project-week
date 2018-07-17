import React from 'react';
import './notelist.css';
import { Link } from 'react-router-dom';

const Note = props => {
    return(
        <div className='note'>
            <Link to={`/note/${props.note.id}`}>
                <h3> {props.note.title} </h3>
             </Link>
             <a> {props.note.content} </a>
        </div>
    )
}


export default Note