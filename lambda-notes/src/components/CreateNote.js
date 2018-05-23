import React from 'react';
import { Link } from 'react-router-dom';

const CreateNote = () => {
    return (
        <div className='create-note-container'>
            <div className='header'>
                <h4 className='create-note-header'>Create New Note:</h4>
            </div>
            <form className='create-note-form'>
                <input 
                    type='text'
                    className='crate-note-input-title'
                    name='title'
                    placeholder='Note Title'
                />

            </form>
        </div>
    )
}