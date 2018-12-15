import React from 'react';
import {Link} from 'react-router-dom';
import './Note.css';

const Note= props => {
    
    return (
        <Link style={{ textDecoration: 'none', color:'black' }} className='link-box' to={{
            pathname:`/notes/${props.id}`,
            state: props.note
        }}>
            
            <div className='note-box'>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </Link>
    );
};

export default Note;