import React from 'react';
import './NoteDisplay.css';
import {NavLink} from 'react-router-dom';

const EditContent = (props) => {
    return (
        
        <form onSubmit={props.editingNote}>
            <h2>Edit Note:</h2>
            <input className ='titleInput' onChange={props.changeHandler} name='title' value={props.note.title} placeholder={props.note.title}></input>
            <input className ='textBodyInput' onChange={props.changeHandler}  name='textBody' value={props.note.textBody} placeholder={props.note.textBody}></input>
            <NavLink to={`/note/${props.note._id}`}>
                <button onClick={props.editingNote}>Save</button>
            </NavLink>
        </form>
        
    );
}

export default EditContent;