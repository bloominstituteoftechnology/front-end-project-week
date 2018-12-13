import React, { Component } from 'react';
import axios from 'axios';

import './NoteForm.css';
const baseUrl = 'https://heroku-backend-notes.herokuapp.com';

class NoteForm extends Component {
    constructor() {
        super(); 
        this.state = {
            title: '',
            textBody: ''
        }
    }

    handleTextInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createNewNote = e => {
        e.preventDefault();
        const { title, textBody } = this.state;
        const newNote = { title, textBody };
        axios 
            .post(`${baseUrl}/notes`, newNote)
            .then(response => {
                console.log('newnote response', response)
                this.setState({ title: '', textBody: '' })
            })
            .catch(error => console.log(error));
    };

    render() {
        return(
            <div className='create-new-note'>  
                <h3 className="page-title">Create New Note:</h3>  
                <input className="title"
                    type='text'
                    placeholder='Note Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleTextInput}
                />
                <input className="textbody"
                    type='text'
                    placeholder='Note Content'
                    name='textBody'
                    value={this.state.textBody}
                    onChange={this.handleTextInput}
                />
                <button onClick={this.createNewNote} className="save">Save</button>
            </div>
        )
    }
}
export default NoteForm;


//make form? 