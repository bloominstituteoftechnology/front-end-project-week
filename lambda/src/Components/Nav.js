import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <div className="Nav">
            <h1 className="Title">Lambda Notes</h1>
            <Link to="/"><button className="Button">View Your Notes</button></Link>
            <Link to="/AddNote"><button className="Button">+ Create New Note</button></Link>
        </div>
    );
};

export default Nav;