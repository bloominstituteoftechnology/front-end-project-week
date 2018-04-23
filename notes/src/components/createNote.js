import React, { Component } from 'react';

export default class CreateNote extends Component {
    state = {
        title: '',
        text: ''
    };

    handleTextInput = e => {
        this.setState({ [e.target.name]: e.target.value})
    }


    render() {
        const { title, text } = this.state;
        return (
            <div>
                <input 

                type='text'
                value={title}
                name="title"
                placeholder="Note Title Here"
                onChange={this.handleTextInput}
                
                />

                 <input 
                
                type='text'
                value={text}
                name="text"
                placeholder="Note Text Here"
                onChange={this.handleTextInput}
                
                />
                
                
            </div>

        );
    }
}