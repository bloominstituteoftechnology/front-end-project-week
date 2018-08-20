import React from 'react';
import { Route, Link } from 'react-router-dom';


const NavBar = (props) => {
    return(
        <div className="NavBar">
            <h1>Lambda Notes</h1>
            <button><Link to='/'>View Your Notes</Link></button>
            <button><Link to='/add/'>+ Create New Note</Link></button>
            <Route exact path='/' />
            <Route path='/add' />
        </div>
    )
}


export default NavBar;