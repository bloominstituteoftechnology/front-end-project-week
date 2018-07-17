import React from 'react';
import './index.css'
const SideBar = () => {
    return (
        <div className='nav-container'>
             <div className="nav-header"><h2>Lambda Notes</h2></div>
            <div className="nav-button">View Your Notes</div>
            <div className="nav-button">+Create New Note</div>
        </div>
    );
};

export default SideBar;