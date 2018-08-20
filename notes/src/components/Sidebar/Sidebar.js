import React from "react";
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <h1>Lambda Notes</h1>
                <Link className="btn" to="/">View Your Notes</Link>
                <Link className="btn" to="/new-note">+ Create New Note</Link>
            </div>
        </div>
    );
};

export default Sidebar;