import React from 'react'; 
import {NavLink} from 'react-router-dom'; 

const EditNote = props =>{
    const note = props.notes.find(note => `${note.id}` === props.match.params.id);
    if(!note ){
        return null
    }
    return(
        <div className="new-note">
        <h1>Edit Note</h1>
        <div className="new-note-inputs">
            <input
            placeholder="Title"
            type="text"
            className="title-input"
            />
            <input 
            placeholder="Content"
            type="text"
            className="content-input"
            />
            <NavLink className="nav-btn"to='/'>
            Add New Note
            </NavLink>
        </div>
        </div>
    )
}
export default EditNote; 