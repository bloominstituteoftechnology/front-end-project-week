import React, { Fragment } from 'react';

function NotesForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        props.handleAddNewNote(event);
    }

    return (
        <Fragment>
            <h2>{props.isUpdating ? 'Update Note' : 'Add New Note'}</h2>
            <form>
                <h3>Title:</h3>
                <input
                    type='text'
                    value={props.note.title}
                    name='title'
                    onChange={props.handleChange}
                />
                <h3>Note:</h3>
                <textarea
                    type='text'
                    value={props.note.text}
                    name='text'
                    onChange={props.handleChange}
                ></textarea>
                <button onClick={handleSubmit}>Add Note</button>
            </form>
        </Fragment>
    );
}

export default NotesForm;