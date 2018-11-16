import React, { Component } from 'react';
import axios from 'axios';

class NewNoteForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault()

        const note = {
            title: this.state.title,
            textBody: this.state.body
        };

        axios
            .post('https://fe-notes.herokuapp.com/note/create', note)
                .then(res => {
                    this.setState({ title: '', body: ''});
                })
                .catch(() => console.log('Error: Note wasn\'t added'));
     }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name="title" value={this.state.title} onChange={this.inputHandler} placeholder="Title"/>
                <input type="text" name="body" value={this.state.body} onChange={this.inputHandler} placeholder="Body"/>
                <button type="submit">Add New Note</button>
            </form>
        )
    }
}
export default NewNoteForm;