import React, { Component } from 'react';

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
        this.props.addNote(this.state)
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