import React from 'react';
import { data } from './Notes';
import './Notes.css';

export const NoteList = (props) => {
    return (
        <div>
            {props.data.map((note => {
                return (
                    <div className="Note-wrapper">
                        <h2>{note.title}</h2>
                        <p>{note.body}</p>
                    </div>
                )
            }))}
        </div>
    )
}