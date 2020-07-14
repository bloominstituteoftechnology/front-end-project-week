import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return(
        <div className='sidebar'>
            <h1 className='sidebar-header'>Lambda<br/>Notes</h1>
            <Link to='/'><button className='button-style'>View Your Notes</button></Link>
            <Link to='/create'><button className='button-style'>+ Create New Note</button></Link>
        </div>
    );
}

export default SideBar;
