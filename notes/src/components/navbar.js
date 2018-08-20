import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return(
    <div className="nav-bar">
      <div className="app-name">Lambda <br />Notes</div>
      <Link to="/"><button className="btn">View Your Notes</button></Link>
      <Link to="/new"><button className="btn">+ Create New Note</button></Link>
    </div>
  );
}

export default Navbar;
