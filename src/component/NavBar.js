import React from 'react';
import { NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bb5 ">
    <NavLink exact activeClassName="selected" className="navlink" to="/">
    LAMBDA//NOTES
          </NavLink>
    <div className="navdiv">
          <NavLink activeClassName="selected" className="navlink" to="/">
          Home
          </NavLink>
          <NavLink activeClassName="selected" className="navlink" to="/">
          Notes
          </NavLink>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    
  </nav>
  );
};

NavBar.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default NavBar;
