import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return(
        <Fragment>
        <div className="side-bar">
            <h1 className="sb-header">Lambda Notes</h1>
            <Link className="sb-link" to="/">View Your Notes</Link>
            <Link className="sb-link" to="/add-note">+Create New Note</Link>
        </div>
        </Fragment>
    )
}

export default SideBar;

