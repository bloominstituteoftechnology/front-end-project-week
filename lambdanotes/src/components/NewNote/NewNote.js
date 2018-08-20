import React, { Component } from 'react';
import './NewNote.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

class NewNote extends Component {
    constructor() {
        super();
    }
    render() {
        return (
        <div className="newnote-container">
            <h3 className="newnote-title">Create New Note:</h3>
            <form className="newnote-form">
                <input 
                    placeholder="Note Title" 
                    type="text"
                    className="note-title-input"
                />
                <input 
                    placeholder="Note Content" 
                    type="text"
                    className="note-content-input"
                />
                <button>Save</button>
            </form>
        </div>
        );
    }
}

export default NewNote;