import React from 'react';
import './SideBar.css';

const SideBar = (props) => {
    return (
        <div className='sideBarContainer'>
            <div className='forBorder'>
                <div className ='sideBar'>
                    <h1>Lambda Notes</h1>
                    <button>View Your Notes</button>
                    <button>+ Create New Note</button>
                </div>
            </div>
        </div>
    );
}

export default SideBar;