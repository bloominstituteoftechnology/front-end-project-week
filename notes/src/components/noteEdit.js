import React from 'react';
import "../css/note.css"

const NoteEdit = props => {
    return (
        <form className="note-edit-form" onSubmit={props.createSubmit}>
            <header className="note-create-header">Edit Note:</header>
            <input
                type="text"
                className="note-title-input"
                placeHolder="Note Content"
                value={props.value}
                onChange={props.changeHandler}
                name="note-title-update" />
            <textarea
                type="text"
                className="note-textarea"
                value={props.value}
                onChange={props.changeHandler}
                name="note-textarea-update" />
            <button
                className="update-button"
                onSubmit={props.createSubmit}>
                Update
            </button>
        </form>
    );
};
export default NoteEdit;