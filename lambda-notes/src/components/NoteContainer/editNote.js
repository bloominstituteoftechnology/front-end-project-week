import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
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
                placeholder={props.notes.textBody}
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