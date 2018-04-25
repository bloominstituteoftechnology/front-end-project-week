import React, { Component } from 'react';
import './NoteItem.css';

const NoteItem = props => {
    console.log(props.Notes[props.match.params.id].title); 
        return (
            <div className="entire-wrapper">
                <div className="note-wrapper">
                    <div className="note-heading">{props.Notes[props.match.params.id].title}</div>
                    <button className="edit-button">edit</button>
                    <button className="delete-button">delete</button>
                    <div className="note-body-full">{props.Notes[props.match.params.id].body}</div>
                </div>
            </div>
        );
}

export default NoteItem;