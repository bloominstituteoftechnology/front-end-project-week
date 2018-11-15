import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <h1>Lambda Notes</h1>
            <nav>
                <Link to="/">View Your Notes</Link>
                <Link to="/create">+ Create New Note</Link>
            </nav>
        </div>
    )
}

export default Sidebar;