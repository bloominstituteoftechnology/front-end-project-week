import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


const NavBar = () => {
    return (
        <div>
            <div className='nav-bar-header'>
                <h2>
                    LambdaNotes
                </h2>
            </div>
            <div className='nav-bar-links'>
                <Link to ='/' className='view-notes-link'>
                    <button className='view-notes-button'>
                        View Your Notes
                    </button>
                </Link>
            </div>
            <div className='create-note-link'>
                <Link to='/note/create'>
                    <button className='create-note-button'>
                        +Create New Note
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;