import React from 'react';
import './notelist.css';

const Note = props => {
    return(
        <div className='note'>
        <h1> {props.note.title} </h1>
        <a> {props.note.content} </a>
        </div>
    )
}


export default Note