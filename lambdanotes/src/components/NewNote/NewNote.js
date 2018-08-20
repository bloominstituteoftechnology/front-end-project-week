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
            <div className="list-container">
                this is new note
            </div>
        );
    }
}

export default NewNote;