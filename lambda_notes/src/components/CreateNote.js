import React from 'react';
import './index.css'

const createNote = props => {
    return (
        <div className='createNoteContainer'>
            <h3>Create New Note:</h3>
            <form onSubmit={props.handleSubmit}>
                <input 
                    onChange={props.handleInputChange}
                    value={props.title}
                    type='text' 
                    name='title'
                    className='inputTitle' 
                    placeholder='Note Title' 
                />
                <textarea 
                    value={props.body}
                    name='body'
                    onChange={props.handleInputChange}
                    rows='20' 
                    className='inputContent' 
                    placeholder='Note Content'
                />
                <button 
                    type='submit' 
                    className='createNoteButton'
                >
                    <strong>Save</strong>
                </button>
            </form>
        </div>
    )
}

export default createNote;