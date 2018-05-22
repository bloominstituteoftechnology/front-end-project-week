import React from 'react';
import { Button } from 'reactstrap'; 
import sideNav from './sideNav.css';

const SideNav = (props) => {
    return (
      <div>
        <div class="sidenav">
            <h1 className="header-School">Lambda School</h1>        
            <Button color="primary" className="main-button1" size="lg">  View Your Notes  </Button>                        
            <Button color="primary" className="main-button2" size="lg">+ Create New Note</Button>            
        </div>
        <div class="main">
            <h2 className="header-Notes">Your Notes:</h2>            
        </div>     
      </div>

    );
};

export default SideNav;
