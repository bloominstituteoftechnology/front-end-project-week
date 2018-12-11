import React from "react";
import {Link} from "react-router-dom";
import './index.css';

const SideBar = () => {
    return(
        <div className="sidebar">
          <h1>Lambda Notes</h1>
          <Link to="/">View Notes</Link>

          <Link to="/addnote">+ Create New Note</Link>
        </div>
    );
}

export default SideBar;