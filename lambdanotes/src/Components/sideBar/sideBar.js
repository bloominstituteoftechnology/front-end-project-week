import React from 'react';
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className='sideBar'>
        {/* <img className='logo' src= 'https://cdn-images-1.medium.com/fit/c/120/120/1*iTABE417EkZDwRv9Uj91Qg.png'/> */}
        <h1 className='logo_header'> Lambda Notes </h1>
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