import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <h1 className='title'>Lambda Notes</h1>
            <Link to='/' className='buttonLink'>
                <button block='true' className='button'>View Your Notes</button>
            </Link>
            <Link to='/create' className='buttonLink'>
                <button block='true' className='button'>+ Create New Note</button>
            </Link>
        </div>
                
    )
}

export default Sidebar;