import React, { Component } from 'react';
import axios from 'axios';

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
        
        this.setState({
            title: '',
            content: ''
        });
    }

    handleInputChange = e => {
        this.setState({ [e.target.content]: e.target.vaule })
    }

    render() {
        return(
            <div className="content-form">
                <form onSubmit={this.addContent}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="Note Title"
                        value={this.state.title}
                        name="title"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="Note Content"
                        value={this.state.content}
                        name="content"
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}