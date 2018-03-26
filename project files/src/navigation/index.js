import React, { Component } from 'react';
import '../style/nav.css';

class Nav extends Component{
    render(){
        return(
            <navbar className="notes-nav">
                <header className="nav-title"> Lambda <br></br> Notes </header>
                <button className="nav-button"> View Your Notes </button>
                <button className="nav-button"> + Create New Notes </button>
                
            </navbar>
        )
    }
}

export default Nav;