import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './SideBar.css';


const SideBar = () => {
  return(
    <div className="side-bar col-12 col-md-3">
      <div className="row justify-content-center">
        <h2>Lambda Notes</h2>
        <NavLink to="/" className="w-100">
          <Button className="side-button">View Your Notes</Button>
        </NavLink>
        <NavLink to="/add" className="w-100">
          <Button className="side-button">+ Create New Note</Button>
        </NavLink>
        <NavLink to="/shared" className="w-100">
          <Button className="side-button">View Shared</Button>
        </NavLink>
      </div>
    </div>
  ) 
}
 
export default SideBar;