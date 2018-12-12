import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component{
    render(){
        return(
            <div className = 'nav-bar'>    
                <h1 className = 'nav-header'>Lambda Notes</h1>
                <div className = 'button-container'>    
                    <NavLink exact to = '/'>
                        <button className = 'nav-button'>View Your Notes</button>
                    </NavLink>
                    <NavLink exact to = '/create'>
                        <button className = 'nav-button'>+ Create New Note</button>
                    </NavLink>
                </div>    
            </div>    
        )
    }
}

export default NavBar;