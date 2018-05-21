import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ListNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 0,
                    title: 'Test Note',
                    body: 'This is Note is a test! Did it work??'
                },
                {
                    id: 1,
                    title: 'Note #2',
                    body: 'I love taking notes!!'
                }
            ]
        }
    }

    render() { 
        console.log(this.state.notes)
        return ( 
            <div className="note-list">
                {this.state.notes.map(note => (
                    <NoteDetails key={note.id} note={note} />
                ))}
            </div>
         )
    }
}
 

function NoteDetails({ note }) {
    const { title, body } = note;
    console.log('NOTE:', note);
    return (
        <div className="note-card">
            <Link to={`/notes/${note.id}`} >
                <h2>{title}</h2>
                <p>{body}</p>
            </Link>
        </div>
    )
}
