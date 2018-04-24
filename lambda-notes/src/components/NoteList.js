import React, { Component } from 'react';
import './NoteList.css';

export const NoteList = props => {
    return (
        <div className="note-list-wrapper">
            <div className="note-wrapper">{props.Note.map((lambdaNotes, index) => 
                <div key={"my" + index} className="note-object-wrapper">
                    <div className="note-title">{lambdaNotes.title}</div>
                    <br />
                    <div className="note-body">{lambdaNotes.body}</div>
                    <br />
                </div>)}
            </div>
        </div>
    );
}