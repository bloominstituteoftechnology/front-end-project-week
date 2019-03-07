import React from 'react';
import Note from './note.js'
import loremipsem from '../loremipsem';

const CardFormat = (props) => {
    return (
        <div key= {props.note.id}>
            <div className = "note-component">
                <div className = "note-header">
                    <h4>{props.note.Title}</h4>
                </div>
                <p>{props.note.noteText}</p>
            </div>
            </div>
    )
}

export default CardFormat;