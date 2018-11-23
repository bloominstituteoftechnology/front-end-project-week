import React, { Component } from 'react';
import axios from 'axios';

import './Notes.css';

const URL = 'https://fe-notes.herokuapp.com/note';

export default class UpdateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: [],
            // title: '',
            // textBody: '',
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // not sure if this id will be id or _id! Boom! It's id becuase it's built into React (not the _id of the server).
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
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
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="notes-list">
                <h2 className="your-notes">Edit Note:</h2>
                    <form className="input-form">
                        <input type="text" defaultValue={this.state.note.title} name="title" onChange={this.handleChange} />
                        <textarea type="text" value={this.state.note.textBody} name="textBody" onChange={this.handleChange} />
                        <button type="submit" className="submit-button">Update</button>
                    </form>
            </div>
        )
    }
};