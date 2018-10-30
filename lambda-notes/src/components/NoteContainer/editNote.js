import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const EditNote = props=>{
  
return(
    <form onSubmit={props.saveEdits} className='edit-note'>
        <input
            placeholder={props.notes.title}
            name='editTitle'
            type='text'
            value={props.editTitle}
            onChange={props.editHandler}
            />
        <input
            placeholder={props.notes.textBody}
            name='editTextBody'
            type='text'
            value={props.editTextBody}
            onChange={props.editHandler}
            />

        <button type='submit' onClick={props.openEditForm} onClick={props.editHandler}>Save</button>
        
    </form>
)

}

export default EditNote;