import React from 'react';
import './styles.css';
import Note from './NoteCard';

export const NoteList = props => {
    return (
        <div className="container-fluid">
            <div className="side">
                <h1>Lambda Notes</h1>
                <div className="links">View Your Notes</div>
                <div className="links second">+Create New Note</div>
            </div>
            <h4>Your Notes:</h4>
            <div className="right">
                {props.Notes.map(note => {
                    return <Note key={note.id} title={note.title} body={note.body} />
                })}
            </div>
        </div>
    )
}