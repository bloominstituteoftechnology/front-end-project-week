import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { lambdaNotes } from './MyNotes';
import './NoteDeleter.css';

const NoteDeleter = (props) => {
    let index = props.Notes[props.match.params.id];
    const deleteNote = event => {
        console.log(props.Notes[props.match.params.id]);
        return props.Notes.splice(index, 1);
    }
    return (
        <div className="component-full-wrapper">
            <div className="component-wrapper">
                <div className="modal-wrapper">
                <div className="component-header">Are you sure you want to delete this?</div>
                <Link to="/" className="my-delete-button-link"><button className="delete-button-deleter" onClick={deleteNote}>Delete</button></Link>
                <Link to="/" className="my-no-button-link"><button className="no-button">No</button></Link>
                </div>
            </div>
        </div>
    );
}

export default NoteDeleter;


