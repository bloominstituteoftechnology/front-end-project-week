import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <div className="NavBar">
            <h1 className="Title">Lambda Notes</h1>
            <Link to="/"><div className="Button">View Your Notes</div></Link>
            <Link to="/AddNote"><div className="Button">+ Create New Note</div></Link>
        </div>
    );
};

// NavBar.propTypes = {
    
// };

export default NavBar;