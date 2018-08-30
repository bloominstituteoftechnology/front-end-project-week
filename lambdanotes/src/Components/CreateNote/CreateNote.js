import React from 'react';
import './createNote.css';
const CreateNote = () => {
    return (
        <div className="noteView-Container">
            <div className="noteView-Content">
                <h4>Create New Note:</h4>
            </div>
            <div className="createNote-Form">
                <input type="text" className="createNote-Title" placeholder="Note Title" />
                <textarea className="createNote-Text" placeholder="Note Content" rows="20" />
                <a href="#"><button className="save-button">Save</button></a>
            </div>
        </div>
    )
}

export default CreateNote;