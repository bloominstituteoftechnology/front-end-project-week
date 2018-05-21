import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

const Navigation = (props) => {
    return (
        <div>
            <h1>Lambda Notes</h1>
            <NavLink to="/">View Your Notes</NavLink>
            <NavLink to="/addnote">+ Create New Note</NavLink>
        </div>
    );
}

export default Navigation;