import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

function NotePage(props) {
    console.log(props.match.params._id)
    const note = props.notes.find(note => note._id === props.match.params.id);
    console.log(note)
    return (
        <div className="notepage-div">
            <h1>{note.title}</h1>
            <p>{note.textBody}</p>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default NotePage;