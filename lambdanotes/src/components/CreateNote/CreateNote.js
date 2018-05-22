import React from 'react';
import { Link } from 'react-router-dom';
import './CreateNote.css';

const CreateNote = () => {
    return (
        <div className='CreateNoteContainer'>
            <div>
                <h3 className='header'>Create New Note:</h3>
            </div>
            <form className='form'>
                <input type='text' className='inputTitle' name='title' placeholder='Note Title' />
                <textarea type='text' className='inputContent' name='content' placeholder='Note Content'></textarea>
                <Link to='/note' className='link'>
                    <input className='saveButton' type='button' value='Save' />
                </Link>
            </form>
        </div>
    )
}

export default CreateNote;