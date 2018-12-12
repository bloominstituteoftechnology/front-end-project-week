import React from 'react'
import Note from './Note'
import './Noteslist.css'


const NoteList = props => {

    const id = localStorage.getItem('id')

    return (
        <div className='noteCardContainer' key={props.notes.id}>
        {props.notes.map(note => {
            if(note.userId === parseInt(id) || note.userId === null) {
            return <Note  key={note.id} note={note} /> 
        }
        })}
        
        </div>
    )
}

export default NoteList;

