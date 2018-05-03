import React from 'react';
import { Link } from 'react-router-dom'
import "../Styles/Sidebar.css";
import CreateNote from './CreateNote';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <p>Lambda Notes</p>

            <Link to={'/'}><button className='sidebar-button'>View Your Notes</button></Link>
            <button className='sidebar-button'>+ Create New Note</button>
        </div>
    )
}

export default Sidebar;