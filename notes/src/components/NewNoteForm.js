import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './UpdateNote.js'

import './NewNoteForm.css';

class NewNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: []
        };
    }

    render(){
    return (
        <div className = "new-note-container">
            <form>
                <h2> Create New Note:
                </h2>
                <input 
                onChange = {this.handleChange} 
                value = {this.title}
                className = "note-title-input"
                type="text"
                placeholder="Note Title" 
                />
                <textarea
                onChange = {this.handleChange} 
                value = {this.textBody}
                className = "note-content-input"
                type = "text"
                placeholder = "Note Content"
                />
                <Link to="/"> 
                <button onClick = {this.props.handleAddNote}> 
                   Add to Note List     
                </button> 
                </Link>
            </form> 
        </div> 
    )
}
}

export default NewNoteForm;