import React from 'react';
import { Link } from 'react-router-dom';
import './CreateNote.css';

const CreateNote = () => {
    return (
        <div className='CreateNoteContainer'>
            <div>
                <h3 className='createNoteHeader'>Create New Note:</h3>
            </div>
            <form className='createNoteForm'>
                <input type='text' className='createNoteInputTitle' name='title' placeholder='Note Title' />
                <textarea type='text' className='createNoteInputContent' name='content' placeholder='Note Content'></textarea>
                <Link to='/note' className='createNoteLink'>
                    <input className='createNoteSaveButton' type='button' value='Save' />
                </Link>
            </form>
        </div>
    )
}

export default CreateNote;