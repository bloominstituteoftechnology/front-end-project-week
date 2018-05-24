import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SideBar.css'

class SideBar extends Component {
    render() {
        return (
            <div>
                <div className="side-bar">
                    <h1 className="app-name">
                        Lambda Notes
                    </h1>
                    <br />
                    <div className="app-links">
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <button className="button1">View Notes</button>
                        </Link>
                        <Link to="/create" style={{ textDecoration: "none" }}>
                            <button className="button2">+ Create New Note</button>    
                        </Link>
                    </div>
                </div>
            </div>                
        );
    }   
}

export default SideBar;