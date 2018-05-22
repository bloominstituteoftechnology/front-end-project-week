import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <h1 className='sidebarTitle'>Lambda Notes</h1>
            <Link to='/' className='buttonLink'>
                <button block='true' className='sidebarButton'>View Your Notes</button>
            </Link>
            <Link to='/create' className='buttonLink'>
                <button block='true' className='sidebarButton'>+ Create New Note</button>
            </Link>
        </div>
                
    )
}

export default Sidebar;