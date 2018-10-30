import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
        return (
            <div>
                <h1>Lambda</h1>
                <h1>Notes</h1>
                <div className="sidebar-buttons">
                <Link to="/">View Your Notes</Link>
                <Link to="/newnote">+ Create New Note</Link>
                </div>
            </div>
        )
    }

export default SideBar;
