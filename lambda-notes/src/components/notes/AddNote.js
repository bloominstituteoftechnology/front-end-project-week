import React, { Component } from 'react';
import './Notes.css';
import axios from 'axios';

const URL = 'https://fe-notes.herokuapp.com/note';

export default class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            title: '',
            bodyText: '',
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        const note = {
            title: this.state.title,
            bodyText: this.state.bodyText,
        };
        axios
            .post(`${URL}/create`, note)
            .then(response => {
                this.setState({ notes: response.data });
                this.setState({ title: '', bodyText: '' });
            })
            .catch(error => {
                console.log(error);
            })         
    };

    render() {
        return (
            <div className="notes-list">
                <h2 className="your-notes">Create New Note:</h2>
                    <form className="input-form" onSubmit={this.submitHandler} >
                        <input type="text" placeholder="Note Title" name="title" value={this.state.title} onChange={this.handleChange} />
                        <textarea type="text" placeholder="Note Content" name="bodyText" value={this.state.bodyText} onChange={this.handleChange} />
                        <button type="submit" className="submit-button">Save</button>
                    </form>
            </div>
        )
    }
};