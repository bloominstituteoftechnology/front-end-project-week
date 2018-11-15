import React, { Component } from 'react';
import axios from 'axios';

import './Notes.css';
import Note from './Note';

const URL = 'https://fe-notes.herokuapp.com/note';

export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],        
        };
    }

    componentDidMount() {
        axios
            .get(`${URL}/get/all`)
            .then(response => {
                this.setState(() => ({ notes: response.data }))
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="notes-list">
                <h2 className="your-notes">Your Notes:</h2>
                <div className="all-notes">
                    {this.state.notes.map(note => (
                        <Note key={note.id} note={note} />
                    ))}
                </div>
            </div>
        );
    }
};

