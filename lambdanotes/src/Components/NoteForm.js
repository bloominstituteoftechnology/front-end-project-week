import React, { Component } from 'react';

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

    //edit

    //delete 
    
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
                <button onClick={this.state.newNote}>Save</button>
            </div>
        )
    }
}
export default NoteForm;