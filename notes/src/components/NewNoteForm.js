import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './UpdateNote.js'
import './NewNoteForm.css';


class NewNoteForm extends Component {
    constructor(props) {
        super(props);
        console.log('logging props in NewNoteForm', this.props)
        this.state = { 
            name: '',
            content: ''
        };
    }
  
    render(){
    return (
        <div className = "new-note-container">
            <form onSubmit = {this.props.handleAddNote}>
                <h2> Create New Note:
                </h2>
                <input 
                onChange = {this.props.handleChange} 
                value = {this.state.name}
                className = "note-title-input"
                type="text"
                placeholder="Note Title" 
                />
                <textarea
                onChange = {this.props.handleChange} 
                value = {this.state.content}
                className = "note-content-input"
                type = "text"
                placeholder = "Note Content"
                />
                <Link to="/notes"> 
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