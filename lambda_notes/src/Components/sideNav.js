import React from 'react';
import { Link } from 'react-router-dom';


const SideNav = props => {
    return (
        <div className='SideNav'>
        <h1 className='SideTitle'>Lambda Notes</h1>
        <Link to={"/"}><button className='View'>View Your Notes </button></Link>
        <Link to={'/createNewNote'}><button className='Create'> +Create New Note</button></Link>
        
        
        </div>
    )
}

export default SideNav;