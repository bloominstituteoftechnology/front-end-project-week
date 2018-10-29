import React from 'react'

function form(props) {
    return (
    <div className='form'>
        <input 
        type='text'
        onChange={props.handleInput}
        placeholder='Note Title'
        name='title'
        value={props.title}
        />
        <input 
        type='text'
        onChange={props.handleInput}
        placeholder='Note Content'
        name='textBody'
        value={props.textBody}
        />
        <button onClick={props.saveNote}>Save</button>
        <p>Note all fields are needed!</p>
    </div>
    );
}


export default form;