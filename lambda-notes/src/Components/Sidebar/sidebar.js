import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return(
        <div className="sidebar-container">
            <div className="title">
            <h1> Lambda </h1>
            <h1> Notes  </h1>
             </div>
             <Link to='/'>
            <button className="sidebar-button"> View Your Notes </button>
            </Link>
            <Link to='/create'>
            <button className="sidebar-button"> + Create New Note </button>
            </Link>
        </div>
    );

}

export default Sidebar