import React from 'react';
import './notelist.css';

const Note = props => {
    return(
        <div className='note'>
        <h3> {props.note.title} </h3>
        <a> {props.note.content} </a>
        </div>
    )
}


export default Note