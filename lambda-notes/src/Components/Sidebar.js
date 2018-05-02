import React from 'react';
import "../Styles/Sidebar.css";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h2>Lambda Notes</h2>

            <button className='sidebar-button'>View Your Notes</button>
            <button className='sidebar-button'>+ Create New Note</button>
        </div>
    )
}

export default Sidebar;