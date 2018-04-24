import React, { Component } from 'react';

const NoteItem = props => {
    console.log(props);
        return (
            <div className="note-wrapper">
                <button className="edit-button">edit</button>
                <button className="delete-button">delete</button>
                <div className="note-heading">{props.title}</div>
                <div className="note-body">{props.body}</div>
            </div>
        );
}

export default NoteItem;