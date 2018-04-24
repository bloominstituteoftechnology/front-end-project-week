import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NoteList.css';

export const NoteList = props => {
    return (
        <div className="note-list-wrapper">
        <h3 className="your-notes">Your Notes:</h3>
            <div className="note-wrapper">{props.Note.map((lambdaNotes, index) => 
                <Link style={{textDecoration: 'none', color: 'black'}} to="/note/:id" key={"my" + index} className="note-object-wrapper">
                    <div className="note-title">{lambdaNotes.title}</div>
                    <br />
                    <div className="note-body">{lambdaNotes.body}</div>
                    <br />
                </Link>)}
            </div>
        </div>
    );
}