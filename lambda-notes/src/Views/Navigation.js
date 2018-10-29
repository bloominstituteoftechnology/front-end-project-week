import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navigation.css"

const Navigation = props => {
    return (
        <nav>
            <h1>Lambda Notes</h1>
            <div className="btn-container">
                <NavLink to="/">View Your Notes</NavLink>
                <NavLink to="/add-note">+ Create New Note</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;