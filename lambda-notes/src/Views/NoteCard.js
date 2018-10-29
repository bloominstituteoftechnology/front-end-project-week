import React, { Component } from 'react';
import { Route } from "react-router-dom";
import "./NoteCard.css"

const NoteCard = props => {
    return (
        <div key={props.note.id}>
            <h3>{props.note.title}</h3>
            <p>{props.note.textBody}</p>
        </div>
    )
}

export default NoteCard;