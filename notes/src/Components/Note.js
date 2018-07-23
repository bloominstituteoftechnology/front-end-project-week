import React, {Component} from 'react';
import noteData from '../data';

const Note = props =>{
    return (
        <div className='note'>
            <p>  -{props.note.title} </p>
            
            <p>  --{props.note.content} </p>


            </div>

    )
}

export default Note;
