import React, { Component } from 'react';
import axios from 'axios';

import './Notes.css';

// const URL = 'https://fe-notes.herokuapp.com/note';
const URL = 'https://morning-tundra-78343.herokuapp.com/note';

export default class UpdateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
            // .get(`${URL}/get/${id}`)
            .get(`${URL}/get/${id}`)
            .then(response => {
                console.log(response);
                this.setState(() => ({ note: response.data }));
            })
            .catch(error => {
                console.error(error);
            });
    };

    handleChange = (e) => {
        // this is where the problem is! Not actually where I'm looking in the submitHandler()!!!!
        this.setState({ [e.target.name]: e.target.value });
        // this.setState({value: e.target.value});
        console.log(e.target.value);
    }

    submitHandler = (e) => {
        e.preventDefault();
        const note = {
            title: this.state.title,
            textBody: this.state.textBody,
        };
        const id = this.props.match.params.id;
        axios
            // .put(`${URL}/edit/${id}`, note)
            .put(`${URL}/edit/${id}`, note)
            .then(response => {
                this.setState({ title: '', textBody: '' })
                this.setState({ note: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="notes-list">
                <h2 className="your-notes">Edit Note:</h2>
                    <form className="input-form" onSubmit={this.submitHandler} >
                        <input type="text" defaultValue={this.state.note.title} name="title" onChange={this.handleChange} />
                        {this.state.textBody}
                        <textarea value={this.state.note.textBody} name="textBody" onChange={this.handleChange} />
                        <button type="submit" className="submit-button">Update</button>
                    </form>
            </div>
        )
    }
};