import React from 'react';
import { Link } from 'react-router-dom';

 function Home() {
    return (
        <div>
            <h1>Welcome to Lambda Notes!</h1>
            {/* <h3>Please log in.</h3> login stretch hopefully coming at some point */}

        <Link to = '/notes'>Enter</Link>
        </div>
    );
}
 export default Home;
