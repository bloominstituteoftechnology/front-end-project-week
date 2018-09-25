import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

function Home() {
    return (
        <div className="home">
            <h1 className="header">Welcome</h1>
            <h4>You are not logged in</h4>
        
        <div className="navlinks">
            <ul>
                <li className="blueButton"><Link to="/notes">Enter as Guest</Link></li>
                <li className={["blueButton", "inactive"].join(' ')}><Link to="/">Log In</Link></li>
                <p>(Coming Soon)</p>
            </ul>
                    
        </div>
        </div>
    );
}

export default Home;