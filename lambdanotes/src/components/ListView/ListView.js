import React, { Component } from 'react';
import './ListView.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

const ListView = props => {
        return (
            <div className="list-container">
                <h3 className="notes-title">Your Notes:</h3>
                <div className="notes-top-container">
                    <ul className="notes-container">
                    {props.notes.map(note => {
                        return (
                            <Link to={`/note-view/${note.id}`} className="note-card" key={note.id}>
                                <h3>{note.title}</h3>
                                <p>{note.textBody}</p>
                            </Link>
                        )
                    })}
                    </ul>                    
                </div>
 
            </div>
        );
}

export default ListView;