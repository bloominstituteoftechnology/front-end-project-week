import React from 'react';

const EditNote = props => {
    return (
    <div className="newnote-container">
        <h3 className="newnote-title">Edit Note:</h3>
        <form onSubmit={props.addNote} className="newnote-form">
            <input 
                onChange={props.handleInputChange}
                value={props.title}
                name="title"
                placeholder="Note Title" 
                type="text"
                className="note-title-input"
            />
            <input 
                onChange={props.handleInputChange}
                value={props.textBody}
                name="textBody"
                placeholder="Note Content" 
                type="text"
                className="note-content-input"
            />
            <button type="submit">Save</button>
        </form>
    </div>
    );
}

export default EditNote;