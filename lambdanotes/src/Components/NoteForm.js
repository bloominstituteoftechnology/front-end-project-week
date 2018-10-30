import React, { Component } from 'react';
import axios from 'axios';

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
        const saveNote = axios 
            .post(`https://fe-notes.herokuapp.com/note/create`, newNote)
            .then(response => {
                this.setState({ title: '', textBody: '' })
            })
            .catch(error => console.log(error));
    };

    render() {
        return(
            <div className='create-new-note'>  
                <h3 className="page-title">Create New Note:</h3>  
                <input 
                    type='text'
                    placeholder='Note Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.handleTextInput}
                />
                <input 
                    type='text'
                    placeholder='Note Content'
                    name='textBody'
                    value={this.state.textBody}
                    onChange={this.handleTextInput}
                />
                <button onClick={this.createNewNote}>Save</button>
            </div>
        )
    }
}
export default NoteForm;