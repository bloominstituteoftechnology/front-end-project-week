import React from 'react';
import {Link, NavLink} from "react-router-dom";

const NavBar = ({name, height, age, id,}) => {
  return (
    <nav className="nav bb2 navbar navbar-expand-lg  navbar-dark bg-dark">
    <a className="navbar-brand" href="#">LAMBDA//NOTES</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink exact activeClassName="selected" className="nav-item nav-link " to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
         
          <NavLink activeClassName="selected" className=" nav-link " to="/Notes">
          Notes
          </NavLink>
        </li>
       
      </ul>
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
