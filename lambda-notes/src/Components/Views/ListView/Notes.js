import React from 'react'
import Note from './Note'

const Notes = props => {
    return (
        <div>
            {props.notes.map(note => <Note key={note._id} note={note}/>)}
        </div>
    )
}

export default Notes