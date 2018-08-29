import React, { Component } from 'react';
import './Bar.css';
import Header from './Header/Header';
const SideBar = () => {
    return (
        <div className="sidebar">
            <div>
                <h1 className="nav-header">Lambda Notes</h1>
            </div>
            <div className="nav-buttons-container">
                <button className="nav-button">View Your Notes</button>
                <button className="nav-button">+ Create New Note</button>
            </div>
        </div>
    );
}

export default SideBar;