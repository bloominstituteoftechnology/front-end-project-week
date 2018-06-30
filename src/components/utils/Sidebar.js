import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="nav-sidebar">
            <h1>Lambda Notes</h1>
            <NavLink className="button" to="/notes">View Your Notes</NavLink>
            <NavLink className="button" to="/addnote">+ New Note</NavLink>
        </div>
    );
}

export default Sidebar;