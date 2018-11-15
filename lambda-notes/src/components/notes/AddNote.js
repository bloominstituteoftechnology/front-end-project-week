import React from 'react';
import './Notes.css';

const AddNote = () => {
    return (
        <div className="notes-list">
            <h2 className="your-notes">Create New Note:</h2>
                <form className="input-form">
                    <input type="text" placeholder="Note Title" />
                    <textarea type="text" placeholder="Note Content" />
                    <button className="submit-button">Save</button>
                </form>
        </div>
    )
}

export default AddNote;