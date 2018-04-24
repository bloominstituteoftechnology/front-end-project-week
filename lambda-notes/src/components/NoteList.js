import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteList.css';

export const NoteList = props => {
    return (
        <div className="note-list-wrapper">
        <h3 className="your-notes">Your Notes:</h3>
            <Link to="/note/:index" className="note-wrapper">{props.Note.map((lambdaNotes, index) => 
                <div key={"my" + index} className="note-object-wrapper">
                    <div className="note-title">{lambdaNotes.title}</div>
                    <br />
                    <div className="note-body">{lambdaNotes.body}</div>
                    <br />
                </div>)}
            </Link>
        </div>
    );
}