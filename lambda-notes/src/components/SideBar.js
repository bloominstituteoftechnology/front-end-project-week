import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
    return(
        <div className="side-bar">
            <h1>Lambda Notes</h1>
            <Link to="/">View Your Notes</Link>
            <Link to="/add-note">+Create New Note</Link>
        </div>
    )
}

export default SideBar;

