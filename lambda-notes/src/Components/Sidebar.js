import React from 'react';
import { Link } from 'react-router-dom'
import "../Styles/Sidebar.css";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <p>Lambda Notes</p>

            <Link to={'/'}><button className='sidebar-button'>View Your Notes</button></Link>
            <Link to={'/create'}><button className='sidebar-button'>+ Create New Note</button></Link>
        </div>
    )
}

export default Sidebar;