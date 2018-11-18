import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Notes.css';

const URL = 'https://fe-notes.herokuapp.com/note';

export default class OneNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: []
            // title: '',
            // textBody: ''
        };
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

    render() {
        return (
                <div className="menu-container">
                    <div className="link-container">
                        <Link to="/" className="link">
                            edit
                        </Link>
                        <Link to="/" className="link">
                            delete
                        </Link>
                    </div>
                    <div className="note-view">
                        <h2 className="your-notes">{this.state.note.title}</h2>
                        <p>{this.state.note.textBody}</p>
                    </div>
                </div>
        );
    }
};