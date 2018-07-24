import React from 'react';
import './Notes.css';

const EditNote = () => {
    return (
        <div className="newnote-container">
            <div className="p-top">
            <h2 className="edit-header">Edit Note: </h2>
            <form>
                <input className="title-bar" placeholder="Note Title"/>
                <textarea className="note-contents" placeholder="Note Content" />
                </form>
                <button className="form-button">Update</button>
                </div>
            </div>
    )
}

export default EditNote;