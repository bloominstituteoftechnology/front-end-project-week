import React from 'react'; 
import {NavLink} from 'react-router-dom'; 
import './EditNote.css'; 

const EditNote = props =>{
    return(
        <div className="new-note">
        <h1>Edit Note</h1>
        <div className="new-note-inputs">
            <input
            placeholder="Title"
            type="text"
            name="titleEdit"
            className="title-input"
            onChange={props.handleInputChange}
            defaultValue={props.titleEdit}
            />
            <textarea 
            placeholder="Content"
            type="text"
            name="contentEdit"
            className="content-input"
            onChange={props.handleInputChange}
            defaultValue={props.contentEdit}
            />
            <NavLink onClick={()=>props.revisions(props.match.params.id)} className="nav-btn"to='/'>
            Add Revisions
            </NavLink>
        </div>
        </div>
    )
}
export default EditNote; 