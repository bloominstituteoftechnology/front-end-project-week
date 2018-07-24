import React from 'react';
import './Notes.css';

const NewNote = () => {
    return (
        <div className="newnote-container">
            <div className="p-top">
            <h2 className="new-header">Create New Note: </h2>
            <form>
                <input className="title-bar" placeholder="Note Title"/>
                <textarea className="note-contents" placeholder="Note Content" />
                </form>
                <button className="form-button">Save</button>
                </div>
            </div>
    )
}

export default NewNote;