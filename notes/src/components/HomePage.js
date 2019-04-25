import React from 'react';
import './HomePage.css';
import {NavLink} from 'react-router-dom';

const HomePage = (props) => {
    return (
        <div className ='homepagecontainer'>
            <div className ='hpcontent'>
                <h1>JOTTER</h1>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
                <NavLink to='/register'>
                    <button>Register</button>
                </NavLink>
            </div>
        </div>
    );
}

export default HomePage;