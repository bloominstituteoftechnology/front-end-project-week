import React from 'react';
import './notes.css'

const Note = props => {

    return (
        <div className = 'noteCard'>
            <div className = 'noteTitle'>
                {props.note.title}
            </div>
            <div className = 'lineBreak' />
            <div className = 'noteBody'>
                {props.note.textBody}
            </div>
        </div>
    )
}

export default Note;