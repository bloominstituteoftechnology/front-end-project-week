import React from "react";
import { Link } from "react-router-dom";

const Sidebar = props => {
    return (
        <div className="sidebar">
            <h1>Lambda Notes</h1>
            <Link to="/" className="button">
                View Your Notes
            </Link>
            <Link to="/add" className="button">
                + Create New Note
            </Link>
        </div>
    );
}

export default Sidebar;