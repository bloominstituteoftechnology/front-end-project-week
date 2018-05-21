import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './ListNotes.css';

export default class ListNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 0,
                    title: 'Test Note',
                    body: 'This Note is a test! Did it work??'
                },
                {
                    id: 1,
                    title: 'Note #2',
                    body: 'I love taking notes!!'
                },
                {
                    id: 3,
                    title: 'Bill of Rights',
                    body: '1) Freedom of Speech 2) The Right to Bear Arms 3) The Housing of Soldiers 4) Protection from Unreasonable Search and Seizure 5) Protection of Rights to Life, Liberty and Property 6) Rights of Accused Persons in Criminal Cases 7) Rights in Civil Cases 8) Excessive Bail, Fines and Punishments Forbidden 9) Other Rights Kept by the People 10) Undelegated Powers Kept by the States and the People'
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
