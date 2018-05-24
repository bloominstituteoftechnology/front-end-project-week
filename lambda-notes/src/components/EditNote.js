import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const EditNote = () => {
    return (
        <div className='edit-note-container'>
            <div>
                <h4 className='edit-note-header'>
                    Edit Note:
                </h4>
            </div>
            <form className='edit-note-form'>
                <input 
                    type='text'
                    className='edit-note-title'
                    name='title'
                    placeholder='Note Title'
                />
                <textarea
                    type='text'
                    className='edit-note-content'
                    name='content'
                    placeholder='Note Content'
                ></textarea>
                <div className='link'>
                    <Link to='/note'>
                        <input
                            className='edit-note-save-btn'
                            type='button'
                            value='Update'
                        />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default EditNote;