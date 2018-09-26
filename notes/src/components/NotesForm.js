import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function NotesForm(props) {
    function handleSubmit(event) {
        event.preventDefault();

        if (props.isUpdating) {
            props.updateNote(props.note.id);
        } else {
            props.addNewNote();
        }
    }

    function handleCancel(event) {
        event.preventDefault();
        if(props.isUpdating) {
        props.history.push(`/notes/${props.note.id}`)
        } else {
            props.history.push(`/notes`)
        }

    }

    return (
        <Fragment>
           <div className = 'note-form'>
            <h3>{props.isUpdating ? 'Edit Note:' : 'Create New Note:'}</h3>
              <form>

                    <input type = 'text'
                    value = {props.note.title}
                    name = 'title'
                    className = 'title'
                    placeholder = 'Note Title'
                    rows = '1'
                    onChange = {props.handleChange} />

                    <textarea type = 'text'
                    value = {props.note.content}
                    name = 'content'
                    className = 'content'
                    placeholder = 'Note Content'
                    cols = '30'
                    rows = '5'
                    onChange = {props.handleChange}></textarea>

                <div className = 'buttons'>
                <button className = 'blueButton' onClick = {handleSubmit}>{props.isUpdating ? 'Update' : 'Save'}</button>
                <button className = 'blueButton' onClick = {handleCancel}>Cancel</button>
                </div>

            </form>
            </div>
        </Fragment>
    )
}

export default NotesForm;
