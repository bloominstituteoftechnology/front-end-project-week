import React from 'react';

const NoteForm = props => {
    if (props.type === 'Edit') {
        var note = props.notes.find(note => {
            if (note._id === props.match.params.id) {
                return note;
            }
            return undefined;
        })
    }

    const submitForm = e => {
        e.preventDefault();
        if (props.type === 'Create') {
            props.createNote();
        }
        if (props.type === 'Edit') {
            props.updateNote(props.match.params.id);
        }
    }
    if (note === undefined & props.type === 'Edit') {
        return <h1>No note with that ID</h1>
    }

    return(
        <form onSubmit={submitForm}>
            <p>
                <label>Title:</label>
                <input name='title' value={props.title} placeholder={props.type === 'Create' ? props.title : note.title} onChange={props.updateValue}></input>
            </p>
            <p>
                <textarea name='textBody' value={props.textBody} placeholder={props.type === 'Create' ? props.textBody : note.textBody} onChange={props.updateValue}></textarea>
            </p>
            <button type='submit'>{props.type === 'Create' ? 'Add Note' : 'Update Note'}</button>
        </form>
    )
}

export default NoteForm;