import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <div className="NavBar">
            <h1>Lambda Notes</h1>
            <Link to="/">View Your Notes</Link>
            <Link to="/AddNote"> Create New Note</Link>
        </div>
    );
};

    
export default NavBar;
