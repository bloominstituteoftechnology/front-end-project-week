import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <header>
                <h1>Lambda<br />Notes</h1>
            </header>
            <nav>
                <Link to="/">View Your Notes</Link>
                <Link to="/create">+ Create New Note</Link>
            </nav>
        </div>
    )
}

export default Sidebar;