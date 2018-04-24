import React from 'react';
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className='sideBar'>
        <h1> Lambda Notes </h1>
        <Link to='/notelist'>
        <button className='side_button'>View Your Notes</button>
        </Link>
        <Link to='/newnote'>
        <button className= 'side_button'> + Create New Note</button>
        </Link>
        </div>
    )
};

export default SideBar;