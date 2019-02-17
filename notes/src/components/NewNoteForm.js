import React from 'react';
import '../App.css';

const NewNoteForm = props => {
    return (
        <form onSubmit = {props.submitHandler}>
            <input
                className = 'input' 
                name = 'title' 
                type = 'text' 
                placeholder = 'note title' 
                onChange = {props.handleChange} 
                value = {props.title} 
            />

            <textArea
                className = 'text-area' 
                name = 'textBody'
                placeholder = 'content' 
                rows = '25' cols = '50'
                onChange = {props.handleChange}
                value = {props.textBody}
            />

            <button>save</button>
        </form>
    )
}

export default NewNoteForm;