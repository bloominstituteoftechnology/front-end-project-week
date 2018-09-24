import React, { Fragment } from "react";
import PropTypes from "prop-types";

const NoteForm = (props) => {
    const handleSubmit = (event) => {
        if(props.isUpdating) {
            props.handleUpdateNote();
        }
        else {
            props.handleAddNewNote(event);
        }
    }
     
    export default handleSubmit;
    
    return ( 
        <Fragment>
        <h2>{props.isUpdating ? 'Update Note' : "Add New Note"}</h2>
        <form>
            <div className='from-text'>
            <input type='text' value={props.note.title}
            name='title' onChange={props.handleChange}/>
            <label>Title</label>
            </div>
            <div className='form-text'>
            <input type='text' value={props.note.body} name='body' onChange={props.handleChange}/>
            <label>Body</label>
            </div>
            <button className='button' onClick={handleSubmit}>Submit</button>
        </form>
        </Fragment>
     );
}
 
export default NoteForm;