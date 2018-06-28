import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <div>
            <h1>Lambda Notes</h1>
            
            <Link to="/">
            <button className="button1">View Notes</button>
            </Link>

            <Link to="/CreateNewNote">
            <button className="button2">+</button>
            </Link>
            </div>
        )
    }
};

export default Sidebar;