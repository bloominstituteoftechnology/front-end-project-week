import React from 'react';
import './Sidebar.css';


const SideBar = () => {
    return ( 
        <div className='side column'>
        <h1>
        Lambda <br /> Notes
        </h1>

        <button className='view'>
        View Your Notes
        </button>

        <button className='create'>
        +Create New Note
        </button>
        </div>
     );
}
 
export default SideBar;