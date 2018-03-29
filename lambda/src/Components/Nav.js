import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <div className="Nav">
            <h1 className="Title">Lambda Notes</h1>
            <Link to="/"><div className="Button">View Your Notes</div></Link>
            <Link to="/AddNote"><div className="Button">+ Create New Note</div></Link>
        </div>
    );
};

export default Nav;