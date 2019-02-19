import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <header>
                <h1>Lambda<br />Notes</h1>
            </header>
            <nav>
                <Link to="/"><div>View Your Notes</div></Link>
                <Link to="/create"><div>+ Create New Note</div></Link>
            </nav>
        </div>
    )
}

export default Sidebar;