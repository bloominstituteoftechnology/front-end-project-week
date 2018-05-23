import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className="nav-sidebar">
            <h1>Lambda Notes</h1>
            <NavLink className="nav-button" to="/">View Your Notes</NavLink>
            <NavLink className="nav-button" to="/addnote">+ Create New Note</NavLink>
        </div>
    );
}

export default Navigation;