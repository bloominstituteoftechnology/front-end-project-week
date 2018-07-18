import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'
const SideBar = () => {
    return (
        <div className='nav-container'>
             <div className="nav-header"><h2>Lambda Notes</h2></div>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="nav-button">View Your Notes</div>
            </Link>
            <Link to='/create' style={{ textDecoration: 'none' }}>
                <div className="nav-button">+Create New Note</div>
            </Link>
        </div>
    );
};

export default SideBar;