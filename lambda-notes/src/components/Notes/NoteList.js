import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const H2 = styled.h2`
    width: 75%;
    height: 10%;
    margin: 51px 10px 20px;
    padding-bottom: 2px;
    align-items: flex-end;
    font-size: 28px;
    color: #4b4b4b;
    // border: 1px solid green;
`;

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
                <H2>Your Notes:</H2>
                {this.state.notes.map(note => (
                    <NoteContents key={note.id} note={note} />
                ))}
            </div>
        )
    }
}

function NoteContents({ note }) {
    const { tags, title, textBody } = note;
    return(
        <Link to={`/notes/${note.id}`} className="note-link">
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