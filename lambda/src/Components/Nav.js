import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <div className="Nav">
            <h1>Lambda Notes</h1>
            <Link to="/">View Your Notes</Link>
            <Link to="/AddNote">+ Create New Note</Link>
        </div>
    );
};

export default Nav;