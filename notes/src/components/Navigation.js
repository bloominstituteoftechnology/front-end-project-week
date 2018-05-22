import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className="nav-sidebar">
            <h1>Lambda Notes</h1>
            <NavLink to="/">View Your Notes</NavLink>
            <NavLink to="/addnote">+ Create New Note</NavLink>
        </div>
    );
}

export default Navigation;