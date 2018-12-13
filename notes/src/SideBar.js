import React from "react";
import {Link} from "react-router-dom";
import './index.css';

const SideBar = () => {
    return(
        <div className="sidebar">
          <h1>Lambda Notes</h1>

          <div className="button-wrapper">
            <Link className="nav-button" to="/">View Notes</Link>
            <Link className="nav-button" to="/add-note">+ Create New Note</Link>
          </div>
        </div>
    );
}

export default SideBar;