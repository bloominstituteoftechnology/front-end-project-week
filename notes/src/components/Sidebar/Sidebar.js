import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='header'>
                <h1>Lambda</h1>
                <h1 className="notes">Notes</h1>
            </div>
            <div className='buttons'>
                <Link to='/'>
                    <button className='sidebar-button'>View Your Notes</button>
                </Link>
                <Link to='/new'>
                    <button className='sidebar-button'>+ Create New Note</button>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar