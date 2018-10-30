import React from 'react';
import './NoteDisplay.css'

const EditContent = (props) => {
    return (
        <div className ='editNoteContainer'>
        <form onSubmit={props.editingNote}>
            <h2>Edit Note:</h2>
            <input className ='titleInput' onChange={props.changeHandler} name='title' value={props.note.title} placeholder={props.note.title}></input>
            <input className ='textBodyInput' onChange={props.changeHandler}  name='textBody' value={props.note.textBody} placeholder={props.note.textBody}></input>
            <button onClick={props.editingNote}>Save</button>
        </form>
        </div>
    );
}

export default EditContent;