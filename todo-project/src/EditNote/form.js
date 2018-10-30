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
        name='textBody'
        value={props.textBody}
        />
        <button onClick={() => props.updateNote(props.note._id)} className='formButton' >Update</button>
    </div>
    );
}


export default form;