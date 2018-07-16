import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return(
        <div className="sidebar-container">
            <div className="title">
            <h1> Lambda </h1>
            <h1> Notes  </h1>
             </div>
            <button className="sidebar-button"> View Your Notes </button>
            <button className="sidebar-button"> + Create New Note </button>
        </div>
    );

}

export default Sidebar