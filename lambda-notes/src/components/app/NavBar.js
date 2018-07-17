import React, { Component } from 'react' ;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const NavBar = () => {
    return (
        <React.Fragment>

            <h1>Lambda <br/> Notes</h1>

            <Link to="/">
            <button className="button-nav">View Your Notes</button>
            </Link>

            <Link to="/create">
            <button className="button-nav">+ Create New Note</button>
            </Link>  

        </React.Fragment>
    )    
}
export default NavBar ;