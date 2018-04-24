import React, { Component } from 'react';
import "./SideBar.css"

const SideBar = () => {
    return (
    <div className = "sideBar">
        <div className = "logo">
            <h1>Lambda Notes</h1>
        </div>
        <button>View Your Notes</button>
        <button>+Create New Note</button>
    </div>
    )
}

export default SideBar;