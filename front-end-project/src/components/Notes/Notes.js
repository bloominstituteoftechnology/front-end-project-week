import React, { Component } from 'react'
import Note from './Note'

const Notes = props => {
    const {notes} = props
    console.log(props.notes);
    return (
        <div>
            {notes.map(note => <Note note={note}/>)}
        </div>
    )
}

export default Notes