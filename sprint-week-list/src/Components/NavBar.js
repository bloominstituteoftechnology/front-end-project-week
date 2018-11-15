import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component{
    render(){
        return(
            <div className = 'navBar'>    
                <h1 className = 'nav-header'>Lambda Notes</h1>
                <NavLink exact to = '/'>
                    <button>View Your Notes</button>
                </NavLink>
                <NavLink to = '/create'>
                    <button>+ Create New Note</button>
                </NavLink>
            </div>    
        )
    }
}

export default NavBar;