import React from 'react'
import './form.css'
import { NavLink } from 'react-router-dom'

function form(props) {

    return (
    <div className='form'>
        <input 
        className='titleForm'
        type='text'
        onChange={props.handleInput}
        placeholder={props.note.title}
        name='title'
        value={props.title}
        />
        <textarea
        className='textBody'
        type='text'
        onChange={props.handleInput}
        placeholder={props.note.textBody}
        name='textBody'
        value={props.textBody}
        />
        <NavLink exact to='/' ><button onClick={() => props.updateNote(props.note._id)} className='formButton' >Update</button></NavLink>
    </div>
    );
}




export default form;

