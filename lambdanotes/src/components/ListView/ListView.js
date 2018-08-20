import React, { Component } from 'react';
import './ListView.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

class ListView extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="list-container">
                this is list-container
            </div>
        );
    }
}

export default ListView;