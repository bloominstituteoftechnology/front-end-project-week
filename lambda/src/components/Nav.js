import React from 'react';
//importing button from reactstrap
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


//statless componet for Navbar, which will be exported to App.js to render NavBar
const NavBar = () => {
    return(
        <div>
            <h1>Lambda Notes</h1>
            <Link to="/"><Button color="secondary">View Your Note</Button>{' '}</Link>
            <Link to="/note"> <Button color="secondary">+ Create New Note</Button>{' '}</Link>
           
        </div>
    );
};

export default NavBar;