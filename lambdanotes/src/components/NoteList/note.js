import React from 'react';
import './notelist.css';
import {Link} from 'react-router-dom';

const Note = props =>{
    return(
        <div className='note'>
            <Link to={`/note/${props.note._id}`}>
                <h3>{props.note.title}</h3>
            </Link>
            <a>{props.note.textBody}</a>
        </div>
    )
}

export default Note;