import React from 'react'
import Note from './Note'
import './Noteslist.css'


const NoteList = props => {
    return (
        <div className='noteCardContainer' key={props.notes.id}>
        {props.notes.map(note => {
            return <Note  key={note._id} note={note} />
        })}
        </div>
    )
}

export default NoteList;

