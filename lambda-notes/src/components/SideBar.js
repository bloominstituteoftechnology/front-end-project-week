import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SideBar.css';

const SideBar = props => {
    return (
        <div className="sidebar-container">
            <h1>Lamda<br/>Notes</h1>
            <button>View Your Notes</button>
            <button>+ Create New Note</button>
        </div>
    )
}

export default SideBar;