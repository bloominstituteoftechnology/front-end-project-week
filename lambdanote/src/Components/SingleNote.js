import React from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from './DeleteNote';
import './SingleNote.css';

const SingleNote = (props ={}) => {
    console.log([props]);
    
    return (
        <div className='single-note'>
        <div className='click-container'>
        <Link to='/edit'><p className='viewNote-btn'>edit</p></Link>
        <DeleteNote />
        </div>
        <div className='content'>
            <h3 className='single-note-header'>{props.note.title}</h3>            
            <p>{props.note.text}</p>
            </div>
        </div>
    )
}

export default SingleNote;