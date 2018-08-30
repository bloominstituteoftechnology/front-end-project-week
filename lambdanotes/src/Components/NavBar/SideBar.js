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
                <a href="#"><button className="nav-button">View Your Notes</button></a>
                <a href="#"><button className="nav-button">+ Create New Note</button></a>
            </div>
        </div>
    );
}

export default SideBar;