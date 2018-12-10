import React from 'react'
import { NavLink } from 'react-router-dom'
import './form.css'

function form(props) {
    return (
    <div className='form'>
        <input 
        className='titleForm'
        type='text'
        onChange={props.handleInput}
        placeholder=' Note Title'
        name='title'
        value={props.title}
        />
        <textarea
        className='textBody'
        type='text'
        onChange={props.handleInput}
        placeholder=' Note Content'
        name='content'
        value={props.content}
        />
       <NavLink exact to='/' ><button onClick={props.saveNote} className='formButton' >Save</button></NavLink>
    </div>
    );
}


export default form;