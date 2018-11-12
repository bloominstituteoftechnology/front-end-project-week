import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"


const Navbar = () => {
  return(
    <nav>
    <div className= "container">
    <Link to= "/"> 
    <h1>Lambda Notes</h1>
    </Link>
    <SignedInLinks />
    <SignedOutLinks />
    </div>
    </nav>
  )
}

export default Navbar;