import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Notes App</h1>
            <h3>You are not logged in</h3>
        
        <Link to="/notes">Enter as Guest</Link>
        </div>
    );
}

export default Home;