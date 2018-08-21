import React from 'react';
import {Link} from 'react-router-dom';

import './NewNoteForm.css';

const NewNoteForm = props => {

    

    return (
        <div className = "new-note-container">
            <form>
                <h2> Create New Note:
                </h2>
                <input 
                onChange = {props.handleChange} 
                value = {props.title}
                className = "note-title-input"
                type="text"
                placeholder="Note Title" 
                />
                <input
                onChange = {props.handleChange} 
                value = {props.textBody}
                className = "note-content-input"
                type = "text"
                placeholder = "Note Content"
                />
                <Link to="/all"> 
                <button onClick = {props.handleAddNote}> 
                   Add to Note List     
                </button> 
                </Link>
            </form> 
        </div> 
    )
}

export default NewNoteForm;