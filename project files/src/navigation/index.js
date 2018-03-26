import React, { Component } from 'react';
import './nav.css';

class Nav extends Component{
    render(){
        return(
            <navbar className="notes-nav">
                <header> Lambda Notes </header>
                <button> View Your Notes </button>
                <button> + Create New Notes </button>
                
            </navbar>
        )
    }
}

export default Nav;