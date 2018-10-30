import React from 'react';
import { Link } from 'react-router-dom';




const SideBar = props => {
    return (
        <div className='sidebar-wrapper'>
            <h1>Lambda</h1>
            <h1>Notes</h1>
            <Link to='/'>
            <button>View Your Notes</button>
            </Link>
            <Link to='/add-note'>
            <button>+Create New Note</button>
            </Link>
        </div>
    )
}


export default SideBar;