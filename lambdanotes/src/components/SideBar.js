import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <h1>Lambda</h1>
            <h1>Notes</h1>
            <Link to='/' className="sidebar_button">View Your Notes</Link>
            <Link to='/create' className="sidebar_button">+ Create New Note</Link>
        </div>
    )
};

export default SideBar;
