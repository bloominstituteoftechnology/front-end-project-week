import React from 'react';
import {Link} from 'react-router-dom';
import './Note.css';

function Note(props) {
    console.log('PROPS', props);
    return(
        <div className='note'>
            <Link to={`/${props.id}`} className='note-link' >
                <h4>{props.title}</h4>
                <hr />
                <p>{props.content}</p>
            </Link>
        </div>
    );
}

export default Note;