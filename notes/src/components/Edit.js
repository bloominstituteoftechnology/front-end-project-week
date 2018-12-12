import React from 'react';
import './NoteDisplay.css';
import {NavLink} from 'react-router-dom';

const EditContent = (props) => {
    return (
        
        <form onSubmit={props.editingNote}>
            <h2>Edit Note:</h2>
            <input className ='titleInput' onChange={props.changeHandler} name='Title' value={props.note.Title} placeholder={props.note.Title}></input>
            <input className ='textBodyInput' onChange={props.changeHandler}  name='Content' value={props.note.Content} placeholder={props.note.Content}></input>
            <NavLink to={`/notes/${props.note.id}`}>
                <button onClick={props.editingNote}>Save</button>
            </NavLink>
        </form>
        
    );
}

export default EditContent;