import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

 const Nav = (props) => {
    return (
        <nav className='nav'>
            <div className='nav-logo'>Lambda <br/>Notes</div>
            <Link to='/notes'><button className='button-nav'>View Your Notes</button></Link>
            <Link to='/create'><button className='button-nav'>+ Create New Note</button></Link>
        </nav>
    )
  };

export default Nav; 