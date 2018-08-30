import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return(
        <div className='sidebar'>
            <h1 className='sidebar-header'>Lambda<br/>Notes</h1>
            <Link to='/'><button className='sidebar-button'>View Your Notes</button></Link>
            <Link to='/create'><button className='sidebar-button'>+ Create New Note</button></Link>
        </div>
    );
}

export default SideBar;
