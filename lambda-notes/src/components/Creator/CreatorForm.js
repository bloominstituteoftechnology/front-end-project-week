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

    addNote = event => {
        event.preventDefault();
        
        const content = {
            textBody: this.state.content,
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
                this.props.history.push("/")
            })
            .catch(error => console.error('Server Error', error));
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return(
            <div className="content-form">
                <h2>Create New Note:</h2>
                <form onSubmit={this.addNote}>
                    <input
                        type="text"
                        value={this.state.title}
                        placeholder="Note Title"
                        onChange={this.handleInputChange}
                        className="input-title"
                        name="title"
                    />
                    <textarea
                        value={this.state.content}
                        placeholder="Note Content"
                        onChange={this.handleInputChange}
                        className="input-content"
                        name="content"
                    />
                </form>

                <button
                    type="submit"
                    className="creator-button"
                    onClick={this.addNote}
                >Save</button>
            </div>
        );
    }
}