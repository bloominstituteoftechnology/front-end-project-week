import React, { Component } from 'react';
import './EditNote.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

class EditNote extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="edit-container">
                this is edit-container
            </div>
        );
    }
}

export default EditNote;