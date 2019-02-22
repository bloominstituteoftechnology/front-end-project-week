import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar">
            <h1 className="title">Lambda Notes</h1>
            <div className="button-holder">
                <Link to="/">
                    <button className="side-button">View Your Notes</button>   
                </Link>
                <Link to="/create">
                    <button className="side-button">+ Create New Note</button>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;