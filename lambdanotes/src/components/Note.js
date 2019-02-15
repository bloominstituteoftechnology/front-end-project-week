import React from 'react';
import '../App.css';

import { Link, Route } from 'react-router-dom';
import NotePage from './NotePage';

function Note(props) {
    return(
        <div>
            <Link className='note' to={`/notes/${props.content.id}`}>
                <h2>{props.content.title}</h2>
                <div>{props.content.note}</div>
            </Link>
            
        </div>
    )
}

export default Note;