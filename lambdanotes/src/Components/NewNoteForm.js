import React, { Component } from 'react';


class NewNoteForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: ''
        };
    }

    updateInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    addNote = () => {

    }

    render() {
        return (
            <form>
                <h3>Create New Note:</h3>
                <input 
                    type='text'
                    placeholder='Note Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.updateInputChange} 
                />
                <input
                    type='text'
                    placeholder='Note Content'
                    name='content'
                    value={this.state.content}
                    onChange={this.updateInputChange}
                />
                <button onSubmit={this.addNote}>Save</button>
            </form>
        )
    }
}

export default NewNoteForm;