import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div>
            <h1 className='sidebarTitle'>Lambda Notes</h1>
            <div onClick={() => props.updateState()} className='sbEntireLink'>
                <Link to='/' className='buttonLink'>
                    <button block='true' className='sidebarButton'>View Your Notes</button>
                </Link>
            </div>
            <div className='sbEntireLink'>
                <Link to='/note/create'>
                    <button block='true' className='sidebarButton'>+ Create New Note</button>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;