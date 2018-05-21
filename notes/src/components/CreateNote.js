import React from 'react';
import "./CreateNote.css"
import Button from './Button'
import { Link } from 'react-router-dom'
import './Note.css'

const CreateNote = (props) => {
    console.log("props", props)
    return (
        <div className="create">
            <h5>{props.pageTitle}</h5>

            <input onChange={props.onChange} placeholder="Note Title" type="text" id="note-title" value={props.title} name="title" />
            <textarea onChange={props.onChange} placeholder="Note Content" type="text" id="note-text" value={props.text} name="text" />
            <Link to="/"><Button class="save-button" text="Save" function={props.onSubmit} /></Link>
        </div>
    );
}

export default CreateNote;