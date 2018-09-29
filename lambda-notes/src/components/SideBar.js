import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const SideBar = () => {
    return(
        <Fragment>
        <div className="side-bar">
            <h1>Lambda Notes</h1>
            <Link to="/">View Your Notes</Link>
            <Link to="/add-note">+Create New Note</Link>
        </div>
        </Fragment>
    )
}

export default SideBar;

