import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <h1>Lambda Notes</h1>
            <Link to='/'>View Your Notes</Link>
            <Link to='/createnote'>+ Create New Notes</Link>
        </div>
    )
};

export default SideBar;
