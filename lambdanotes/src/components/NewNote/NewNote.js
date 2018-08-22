import React, { Component } from 'react';
import './NewNote.css';
import axios from 'axios';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newnote: [],
            tag: '',
            title: '',
            textBody: '',
        };
    }

    addNote = event => {
        event.preventDefault();
       
        const newNote = {
            tag: this.state.tag,
            title: this.state.title,
            textBody: this.state.textBody,
        }
        axios
        .post('https://killer-notes.herokuapp.com/note/create', newNote)
        .then(response => {
            this.setState({ newnote: response.data })
        })
        .catch(error => {
            console.log('Error: ', error)
        })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
        <div className="newnote-container">
            <h3 className="newnote-title">Create New Note:</h3>
            <form onSubmit={this.addNote} className="newnote-form">
                <input 
                    onChange={this.handleInputChange}
                    value={this.state.title}
                    name="title"
                    placeholder="Note Title" 
                    type="text"
                    className="note-title-input"
                />
                <input 
                    onChange={this.handleInputChange}
                    value={this.state.textBody}
                    name="textBody"
                    placeholder="Note Content" 
                    type="text"
                    className="note-content-input"
                />
                <button type="submit">Save</button>
            </form>
        </div>
        );
    }
}

export default NewNote;