import React, { Component } from 'react';

const NoteItem = props => {
    console.log(props.Notes[props.match.params.id].title); 
        return (
            <div className="note-wrapper">
                <button className="edit-button">edit</button>
                <button className="delete-button">delete</button>
                <div className="note-heading">{props.Notes[props.match.params.id].title}</div>
                <div className="note-body">{props.Notes[props.match.params.id].body}</div>
            </div>
        );
}

export default NoteItem;