import React from 'react';
//importing button from reactstrap
import { Button } from 'reactstrap';


//statless componet for Navbar, which will be exported to App.js to render NavBar
const NavBar = () => {
    return(
        <div>
            <h1>Lambda Notes</h1>
            <Button color="secondary">View Your Note</Button>{' '}
            <Button color="secondary">+ Create New Note</Button>{' '}
        </div>
    );
};

export default NavBar;