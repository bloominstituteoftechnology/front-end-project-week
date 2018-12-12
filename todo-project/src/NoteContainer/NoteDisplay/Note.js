import React from 'react'
import { NavLink } from 'react-router-dom';
import './Note.css'


const Note = props => {

   let noteBody = () => {
        if(props.note.content.length >= 410) {
            let str = props.note.content.substr(0,410)
            return str.concat('.....')
        } else {
            return props.note.content
        }
    }

   const id = localStorage.getItem('id')

    const notes = () => {
        if(props.note.userId === parseInt(id)  || props.note.userId === null ) {
            return (
            <div className='innerContent'>
            <h1 className='title' >{props.note.title}</h1>
            <p className='body' >{noteBody()}</p>
            </div>
            )
        }
    }

    return (
        <div className='noteCard' >
        <NavLink exact to={`/${props.note.id}`} >
            {notes()}
        </NavLink>
        </div>
        
    )
}


export default Note;