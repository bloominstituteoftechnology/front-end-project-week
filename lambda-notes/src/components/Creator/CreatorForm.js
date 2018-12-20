import React, { Component } from 'react';
import axios from 'axios';
import './CreatorForm.css';

export default class CreatorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    addContent = event => {
        event.preventDefault();
        
        const content = {
            content: this.state.content,
            title: this.state.title
        };

        axios({
            method: 'POST',
            url: `https://fe-notes.herokuapp.com/note/create`,
            data: content
        })
            .then(response => {
                console.log(response)
                console.log(response.data)
            })
            .catch(error => console.error('Server Error', error));
        
        // this.setState({
        //     title: '',
        //     content: ''
        // });
    }

    handleInputChange = e => {
        this.setState({ [e.target.content]: e.target.value })
    }

    render() {
        return(
            <div className="content-form">
                <h2>Create New Note:</h2>
                <form onSubmit={this.addContent}>
                    <input
                        type="text"
                        value={this.state.title}
                        placeholder="Note Title"
                        onChange={this.handleInputChange}
                        className="input-title"
                    />
                    <input
                        type="text"
                        value={this.state.content}
                        placeholder="Note Content"
                        onChange={this.handleInputChange}
                        className="input-content"
                    />
                    <button type="submit" className="creator-button">Save</button>
                </form>
            </div>
        );
    }
}