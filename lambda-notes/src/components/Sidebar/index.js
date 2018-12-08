import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <h1>
                Lambda <br />
                Notes
            </h1>
            <Link to="/">
                <button>
                    View Your Notes
                </button>
            </Link>
            <Link to="/notes/add">
                <button>
                    + Create New Note
                </button>
            </Link>
        </div>
    );
}

export default Sidebar;