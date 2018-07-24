import React, {Component} from 'react';
import noteData from '../data';

const Note = props =>{
    return (
        <div className='note'>
            <p>  -{props.notes.title} </p>
            
            <p>  --{props.notes.content} </p>


            </div>

    )
}

export default Note;
