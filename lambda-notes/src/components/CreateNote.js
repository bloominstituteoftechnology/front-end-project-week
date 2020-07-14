import React from 'react';

const CreateNote = props => {
    return (
        <div className='add-note'>
            <h2>Create Note:</h2>
            <input
                type='text'
                placeholder='Note Title'
                name='title'
                value={props.title}
                onChange={props.handleChange}
            />
            <textarea 
                type='text'
                placeholder='Note Content'
                name='content'
                value={props.content}  
                onChange={props.handleChange}             
            />
            <button onClick={props.addNote}>Save</button>
        </div>
    )
}

export default CreateNote;