import React, { Fragment } from 'react';
import './NotesForm.css';

function NotesForm(props) {
    function handleSubmit(event) {
        event.preventDefault();

        if(props.isUpdating) {
            props.handleUpdateNote();
        } else {
            props.handleAddNewNote(event);
        }
    }

    return (
        <Fragment className='overall-container'>
            
            <form className='form-container'>
            <h2>{props.isUpdating ? 'Update Note' : 'Create New Note'}</h2>
                <h3>Title:</h3>
                <input
                    type='text'
                    value={props.note.title}
                    name='title'
                    onChange={props.handleChange}
                    className='title-input'
                />
                <h3>Note:</h3>
                <textarea
                    type='text'
                    value={props.note.textBody}
                    name='textBody'
                    onChange={props.handleChange}
                    className='text-input'
                ></textarea>
                <button onClick={handleSubmit}>Add Note</button>
            </form>
        </Fragment>
    );
}

export default NotesForm;