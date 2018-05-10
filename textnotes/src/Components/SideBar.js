import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

class SideBar extends Component {

    render() {
        return (
            <div className="sidebar">
                <h1 className="Lambda-Logo"> Lambda Notes </h1>

                <Link to="/">
                    <button className="button">View Your Notes</button>
                </Link>

                <Link to="/CreateNote">
                    <button className="button">+ Create New Note</button>
                </Link>
            </div>
        );
    }
}

export default SideBar;