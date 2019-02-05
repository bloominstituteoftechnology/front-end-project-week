import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
function Navigation() {
    return(
        <div className='nav'>
            <p>Lambda<br/>Notes</p>
            <div><Link className='link' to='/'>View Your Notes</Link></div>
            <div><Link className='link' to='/create-new-note'>+ Create New Note</Link></div>
        </div>
    );
}

export default Navigation;