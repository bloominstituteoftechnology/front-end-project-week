import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <div className="NavBar">
            <h1 className="Title">Lambda Notes</h1>
            <Link to="/"><button className="Button">View Your Notes</button></Link>
            <Link to="/AddNote"><button className="Button">Create New Note</button></Link>
        </div>
    );
};

// NavBar.propTypes = {
    
// };

export default NavBar;