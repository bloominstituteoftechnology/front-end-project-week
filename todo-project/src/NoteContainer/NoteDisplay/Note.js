import React from 'react'
import { NavLink } from 'react-router-dom';
import './Note.css'



const Note = props => {
    return (
        <div className='noteCard' >
        <NavLink exact to={`/${props.note.id}`} >
            <div className='innerContent'>
            <h1 className='title' >{props.note.title}</h1>
            <p className='body' >{props.note.content}</p>
            </div>
        </NavLink>
        </div>
        
    )
}


export default Note;