import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Notes.css';

export default class NoteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: []
        };
    }

    componentDidMount() {
        axios  
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                this.setState(() => ({ notes: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            })
    }

    render() {
        return(
            <div className="note-board">
                <h2>Your Notes:</h2>
                {this.state.notes.map(note => (
                    <NoteContents key={note._id} note={note} />
                ))}
            </div>
        )
    }
}

function NoteContents({ note }) {
    const { tags, title, textBody } = note;
    return(
        <Link to={`/notes/${note._id}`} className="note-link">
            <div className="note-card">
                <h3>{title}</h3>
                <div className="note-content">
                    {textBody}
                </div>
                <div className="note-tags">
                    {tags}
                </div>
            </div>
        </Link>
    );
}