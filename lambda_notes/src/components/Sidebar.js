import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return(
        <div className='sideBar'>
            <p className='sbTitle'><strong>Lambda Notes</strong></p>
            <button className='sbButton button1'> View Your Notes</button>
            <button className='sbButton'>+ Create New Note</button>
        </div>
    );
}

export default Sidebar;