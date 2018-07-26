import React from 'react';
import {Link} from 'react-router-dom';
import './Note.css';

const Note= (props, {match})=> {

    return (
        <Link className='link-box' to={`/notes/${props.match.params.id}`}>
            <div className='note-box'>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </Link>
    );
};

export default Note;