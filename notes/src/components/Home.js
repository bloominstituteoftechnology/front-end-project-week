import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

 function Home() {
    return (
        <div className = 'home'>
            <h1 className = 'header'>Welcome to Lambda Notes!</h1>


          <div className = 'navlinks'>
              <ul>
                <li className = 'blueButton'><Link to = '/notes'>Enter</Link></li>
                {/* <h3>Please log in.</h3> login stretch hopefully coming at some point */}
              </ul>
          </div>
        </div>
    );
}
 export default Home;
