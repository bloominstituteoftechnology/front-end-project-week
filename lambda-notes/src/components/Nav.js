import React from 'react';
import {Link} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className='nav'>
            <div className='nav-logo'>Lambda <br/> Notes</div>
            <Link to='/'><button className='button-nav'>View Your Notes</button></Link>
            <Link to='/add-note'><button className='button-nav'>+ Create New Note</button></Link>
        </nav>
    )
  };

  export default Nav;