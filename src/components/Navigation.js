import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
    return (
        <div className="nav-sidebar">
            <h1>Lambda Notes</h1>
            <NavLink className="button" to="/notes">View Your Notes</NavLink>
            <NavLink className="button" to="/addnote">+ Create New Note</NavLink>
            <button className="button" onClick={props.signoutHandler}>Sign Out</button>
        </div>
    );
}

export default Navigation;