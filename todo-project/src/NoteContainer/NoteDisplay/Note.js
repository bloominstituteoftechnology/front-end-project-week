import React from 'react'
import './Note.css'



const Note = props => {
    return (
        <div className='noteCard'>
            <div className='innerContent'>
            <h1 className='title' >{props.note.title}</h1>
            <p className='body' >{props.note.textBody}</p>
            </div>
        </div>
    )
}


export default Note;