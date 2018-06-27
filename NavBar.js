import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const NavBar = () => {
    return (
        <div>
            <h1 className='title'>Lambda Notes</h1>
            <div className='link'>
                <Link to='/' className='buttonLink'>
                    <button block='true' className='buttons'>View Your Notes</button>
                </Link>
            </div>
            <div className='link'>
                <Link to='/note/create'>
                    <button block='true' className='buttons'> +Create New Note</button>
                </Link>
            </div>
            <SearchBar />
        </div>
    )
}

export default NavBar; 