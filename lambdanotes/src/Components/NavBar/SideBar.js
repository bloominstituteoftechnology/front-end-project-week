import React, { Component } from 'react';
import './Bar.css';
import { Link } from 'react-router-dom';
import Header from './Header/Header';
const SideBar = () => {
    return (
        <div className="sidebar">
            <div>
                <h1 className="nav-header">Lambda Notes</h1>
            </div>
            <div className="nav-buttons-container">
                <Link to="/"><button className="nav-button">View Your Notes</button></Link>
                <Link to="/create"><button className="nav-button">+ Create New Note</button></Link>
            </div>
        </div>
    );
}

export default SideBar;