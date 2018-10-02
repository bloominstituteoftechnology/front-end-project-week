import React, { Component } from 'react';
import axios from 'axios';

function NotePage(props) {
    console.log(props.match.params._id)
    const note = props.notes.find(note => note._id === props.match.params.id);
    console.log(note)
    return (
        <div>
            <h1>{note.title}</h1>
            <p>{note.textBody}</p>
        </div>
    )
}

export default NotePage;