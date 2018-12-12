import React from 'react';
import './SideBar.css';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
    let loginButton;
    if(!props.loginStatus) {
        loginButton=<button>Login</button>
    }
    return (
        <div className='sideBarContainer'>
                <div className ='sideBar'>
                    <h1>Lambda Notes</h1>
                    <NavLink to='/notes' activeClassName="selected">
                        <button>View Your Notes</button>
                    </NavLink>
                    <NavLink to='/notes/new-note' activeClassName="selected">
                        <button>+ Create New Note</button>
                    </NavLink>  
                    <NavLink to='/login' activeClassName='selected'>
                        {loginButton}
                    </NavLink>
                </div>
        </div>
    );
}

export default SideBar;