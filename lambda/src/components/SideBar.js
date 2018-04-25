import React from "react";
import './SideBar.css';
import { Link } from 'react-router-dom';

export const SideBar = props => {
  return <div className="sideBarContainer">
            <div className="header">
                <h1 className="headerSideBar">Lambda Notes</h1>
            </div>
            <Link to='/'><button className="button">View Your Notes</button></Link>
            <Link to='/create'><button className="button">+ Create New Note</button></Link>
         </div>
};