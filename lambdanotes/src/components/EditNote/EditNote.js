import React from 'react';
import { Link } from 'react-router-dom';
import './EditNote.css';

const EditNote = () => {
    return (
        <div className='editNoteContainer'>
            <div>
                <h3 className='editNoteHeader'>Edit Note:</h3>
            </div>
            <form className='editNoteForm'>
                <input type='text' className='editNoteInputTitle' name='title' placeholder='Note Title' />
                <textarea type='text' className='editNoteInputContent' name='content' placeholder='Note Content'></textarea>
                <div className='enEntireLink'>
                    <Link to='/note'>
                        <input className='editNoteSaveButton' type='button' value='Update' />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default EditNote;