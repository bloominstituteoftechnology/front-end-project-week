import React from 'react';
import { Button } from 'reactstrap'; 

import sideNav from './sideNav.css';
import ListView from './ListView.js'

const SideNav = (props) => {
    return (
      <div>
        <div class="sidenav">
            <h1 className="header-School">Lambda School</h1>        
            <Button color="primary" size="lg">View Your Notes</Button>
            <Button color="primary-Button" size="lg">+ Create New Note</Button>            
        </div>
        <div class="main">
            <h2 className="header-Notes">Your Notes:</h2>
            <ListView /> 
        </div>     
      </div>

    );
};

export default SideNav;

