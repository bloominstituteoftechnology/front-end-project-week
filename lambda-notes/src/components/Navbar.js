import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <h1>Lambda Notes</h1>
            <NavLink to="/">View Your Notes</NavLink>
            <NavLink to="/NewNote">+ Create New Note</NavLink>
        </div>
    );
}

export default Navbar;
