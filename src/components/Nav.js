import React from 'react';
import {Link, NavLink} from 'react-router-dom';

let Nav = () => {
    return (
        // The logo links home. The first navlink links home as well. The second navlink goes to the form.
        // It'd be great to figure out how to switch Add to Edit in the relevant cases.
        <nav>
            <Link to='/'><h1 className='logo'>Vellum</h1></Link>
            <div className='links'>
                <NavLink className='navlink' activeStyle={{border: '1px solid white'}} exact to='/'>View Notes</NavLink>
                <NavLink className='navlink' activeStyle={{border: '1px solid white'}} to='/add'>
                    Add Note
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav;