import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="side-bar">
            <h1>Lambda Notes</h1>
            <div className="button">View Your Notes</div>
            <div className="button">+ Create New Note</div>
        </div>
    );
};

export default SideBar; 
