import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='header'>
                <p>Lambda</p>
                <p>Notes</p>
            </div>
            <div className='buttons'>
                <button className='sidebar-button'>View Your Notes</button>
                <button className='sidebar-button'>+ Create New Note</button>
            </div>
        </div>
    )
}

export default Sidebar