import React from 'react';
import { Link } from 'react-router-dom'

const Notes = props => {
    return (
        <div className='Notes-Container'>
            <h2>Your Notes:</h2>
            <div className='notes-display'>
                {props.notes.map(note => (
                    <div
                        key={note.id}
                        title={note.title}
                        textBody={note.textBody} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Notes;