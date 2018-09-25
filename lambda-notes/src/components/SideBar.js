import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="side-bar">
            <h1>Lambda<br/>Notes</h1>
            <button><NavLink to="/" className="button">View Your Notes</NavLink></button>
            <button><NavLink to="/create-note" className="button">+ Create New Note</NavLink></button>
        </div>
    );
};

export default SideBar; 
