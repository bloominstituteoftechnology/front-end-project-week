import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: true,
            title: '',
            textBody: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.value)
    }

    addNote = e => {
        const note = {
            title: this.state.title,
            textBody: this.state.textBody
        }
        console.log(note.textTitle)
        console.log(note)
        this.props.postNoteRequest(note)
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="noteform-div">
                <h1>{this.state.edit ? 'Edit Note' : 'Create New Note'}</h1>
                <form className="noteform-form" onSubmit={this.addNote}>
                    <input 
                    className="noteform-title-input"
                    type="text" 
                    name="title" 
                    onChange={this.handleChange} 
                    value={this.state.title}/>
                    <input 
                    className="noteform-body-input"
                    type="text"
                    name="textBody" 
                    onChange={this.handleChange} 
                    value={this.state.textBody}/>
                    <button className="noteform-button" type="submit">Add Note</button>
                </form>
            </div>


        )
    }
}

export default NoteForm;