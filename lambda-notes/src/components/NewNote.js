import React from 'react';
import { Link } from "react-router-dom";

const NewNote = props => {
return (
    <div className="input-page">
        <form onSubmit={props.addNewNote}>
        <h3>Create New Note:</h3>
        <input className="title" onChange={props.handleChange} type="text" name="title" value={props.title} placeholder="Note Title" />
        <textarea className="content" onChange={props.handleChange} type="text" name="content" value={props.content} placeholder="Note Content" />
        <Link className="save-button" onMouseDown={props.addNewNote} to={`/`}>Save</Link>
        </form>
    </div>
    );
}


export default NewNote;