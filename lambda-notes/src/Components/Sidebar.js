import React from 'react';
import { Link } from 'react-router-dom'
import "../css/Sidebar.css";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h6>Lambda Notes</h6>
            <Link to={'/'}><button className='sidebar-button'>View Your Notes</button></Link>
            <Link to={'/create'}><button className='sidebar-button'>+ Create New Note</button></Link>
        </div>
    )
}

export default Sidebar;