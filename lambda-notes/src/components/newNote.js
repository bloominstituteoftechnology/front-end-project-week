import React from 'react';

const NewNote = () => {
    return (
        <div className="new-note-container">
            <div className="note-list__title">Create New Note:</div>                
            <div className="new-note__title-input">
                <textarea className="title-input" placeholder="Note Title" rows="13" cols="1" maxLength="13" />    
            </div>
            <div className="new-note__content-input">
                <textarea className="content-input" placeholder="Note Content" rows="4" cols="72" />
            </div>
            <div className="save-btn-container">
                <div className="save-btn">Save</div>
            </div>
        </div>
    )
}

export default NewNote;