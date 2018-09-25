import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Lambda Notes</h1>
            <h4>You are not logged in</h4>
        
        <Link to="/notes">Enter as Guest</Link>
        </div>
    );
}

export default Home;