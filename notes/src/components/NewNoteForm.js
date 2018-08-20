import React from 'react';

const NewNoteForm = () => {

    return (
        <div className = "new-note-container">
            <form>
                <h2> Create New Note:
                </h2>
                <input 
                className = "note-title-input"
                type="text"
                placeholder="Note Title" 
                />
                <input
                className = "note-content-input"
                type = "text"
                placeholder = "Note Content"
                />
            </form> 
        </div> 
    )
}

export default NewNoteForm;