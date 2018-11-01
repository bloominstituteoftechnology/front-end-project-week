import React from 'react';

import './NoteEdit.css';


const EditNote = props => {


    return (

        <form onSubmit={props.saveEdits} className='edit-note'>
            <h1>Edit Note:</h1>
            <input
                placeholder={props.notes.title}
                name='editTitle'
                type='text'
                value={props.editTitle}
                onChange={props.editHandler}
                className='edit-title'
            />
            <textarea
                placeholder={props.editTextBody}
                name='editTextBody'
                type='text'
                value={props.editTextBody}
                onChange={props.editHandler}
                className='edit-textBody'
            />
            <button type='submit' onClick={props.saveEdits} className='save-edit-btn'>Save</button>

        </form>
    )

}

export default EditNote;