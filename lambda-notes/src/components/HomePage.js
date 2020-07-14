import React from 'react';
import {Link} from 'react-router-dom';
import logo from './lambda-logo.png';


const HomePage = () => {
    return (
        <div>
        <img className="homepage-logo-img" src={logo} />
            <div>
            <h1 className="homepage-header">Welcome to Lambda Notes</h1>
            <p className="homepage-content-a">This is an app that creates short notes where you can store and retrieve when you want them.</p>

           <h4 className="homepage-content">Ready to get started? </h4>
           <p className="homepage-content"> Log in or Create a new account</p>
            <div className="home-button">
                <Link to='/login'><button className="home-login-button">Login</button></Link>
                </div>
                <div>
                <Link to='/register'><button className="home-login-button">Register A New User</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
