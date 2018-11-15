import React from 'react';

const CreateNote = props => {
    const submitForm = e => {
        e.preventDefault();
        props.createNote();
    }

    return(
        <form onSubmit={submitForm}>
            <p>
                <label>Title:</label>
                <input name='title' value={props.title} onChange={props.updateValue}></input>
            </p>
            <p>
                <textarea name='textBody' value={props.textBody} onChange={props.updateValue}></textarea>
            </p>
            <button type='submit'>Add Note</button>
        </form>
    )
}

export default CreateNote;