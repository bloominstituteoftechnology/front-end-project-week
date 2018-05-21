import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <div>
            <h1>Lambda Notes</h1>
            
            <Link to="/">
            <button className="button1">View Your Notes</button>
            </Link>

            <Link to="/CreateNewNote">
            <button className="button2">+ Create New Note</button>
            </Link>
            </div>
        )
    }
};

export default Sidebar;