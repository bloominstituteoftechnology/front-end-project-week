import React from 'react';
import { Button } from 'reactstrap'; 
import './sidenav.css'


const SideNav = (props) => {
    return (
      <div>
        <div class="sideNav">
            <h1 className="header-Title">Lambda School</h1>        
            <Button color="primary" className="button1" size="lg">  View Your Notes  </Button>                        
            <Button color="primary" className="button2" size="lg"> + Create New Note</Button>            
        </div>
        <div class="main">
            <h2 className="header-Notes">Your Notes:</h2>            
        </div>     
      </div>

    );
};

export default SideNav;