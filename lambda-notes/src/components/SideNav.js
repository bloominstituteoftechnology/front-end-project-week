import React from 'react';
import { Button } from 'reactstrap'; 
import sideNav from './sideNav.css';

const SideNav = (props) => {
    return (
      <div>
        <div class="sidenav">
            <h1 className="header-School">Lambda School</h1>        
            <button className="button1">View Your Notes</button>
            <button className="button2">+ Create New Note</button>           
        </div>
        <div class="main">
            <h2 className="header-Notes">Your Notes:</h2>            
        </div>     
      </div>

    );
};

export default SideNav;
