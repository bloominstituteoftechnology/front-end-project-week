import React from 'react'
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
       <button onClick={props.saveNote} className='formButton' >Save</button>
    </div>
    );
}


export default form;