import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='header'>
                <h1>Lambda</h1>
                <h1 className="notes">Notes</h1>
            </div>
            <div className='buttons'>
                <button className='sidebar-button'>View Your Notes</button>
                <button className='sidebar-button'>+ Create New Note</button>
            </div>
        </div>
    )
}

export default Sidebar