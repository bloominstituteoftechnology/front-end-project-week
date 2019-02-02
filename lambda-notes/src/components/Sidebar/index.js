import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Sidebar = () => {

    return (
        <div className="sidebar">
            <h1>
                Lambda <br />
                Notes
            </h1>
            <Link to="/">
                <button className="button view">
                    View Your Notes
                </button>
            </Link>
            <Link to="/note/create">
                <button className="button create">
                    + Create New Note
                </button>
            </Link>
        </div>
    );
}

export default Sidebar;
