import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav-sidebar">
            <h1>Lambda Notes</h1>
            <NavLink className="button" to="/">View Your Notes</NavLink>
            <NavLink className="button" to="/addnote">+ Create New Note</NavLink>
        </div>
    );
}

export default Navigation;