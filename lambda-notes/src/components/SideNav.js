import React from 'react';
import { Route, Link } from 'react-router-dom';

import sideNav from './sideNav.css';
import NewNote from './NewNote.js';
import ListView from './ListView.js';

const SideNav = (props) => {
    return (
      <div>
        <div class="sidenav">
            <h1 className="header-School">Lambda School</h1>
                <Link to="/">
                  <button className="button1">View Your Notes</button>
                </Link>                
                <Link to="/newnote">            
                  <button className="button2">+ Create New Note</button>
                </Link>
        </div>
        <div class="main">
            
        </div>     
      </div>

    );
};

export default SideNav;
