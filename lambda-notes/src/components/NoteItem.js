import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteItem.css';

const NoteItem = props => {
    let index = props.Notes[props.match.params.id];
    const deleteNote = event => {
        return props.Notes.splice(index, 1);
    }
        return (
            <div className="entire-wrapper">
                <div className="note-wrapper">
                    <div className="note-heading">{props.Notes[props.match.params.id].title}</div>
                    <Link to="/edit" className="edit-button-link"><button className="edit-button">edit</button></Link>
                    <Link to="/" className="delete-button"><button className="delete-button" onClick={deleteNote}>delete</button></Link>
                    <div className="note-body-full">{props.Notes[props.match.params.id].body}</div>
                </div>
            </div>
        );
}

export default NoteItem;