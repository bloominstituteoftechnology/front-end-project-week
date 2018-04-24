import React from 'react';
import './styles.css';
import Note from './NoteCard';

export const NoteList = props => {
    return (
        <div className="container-fluid">
            <div className="right">
                {props.Notes.map(note => {
                    return <Note key={note.id} title={note.title} body={note.body} />
                })}
            </div>
        </div>
    )
}