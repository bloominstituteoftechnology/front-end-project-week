import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <div className="Nav">
            <h1 className="NavBar__Title">Lambda Notes</h1>
            <Link to="/"><div className="NavBar__Button">View Your Notes</div></Link>
            <Link to="/AddNote"><div className="NavBar__Button">+ Create New Note</div></Link>
        </div>
    );
};

export default Nav;