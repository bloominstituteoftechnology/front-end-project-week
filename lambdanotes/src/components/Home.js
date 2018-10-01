import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>My Notes</h1>
            <p>"And as imagination bodies forth</p> 
            <p>The forms of things unkown,</p>
            <p>The poets pen</p>
            <p>Turns them to shapes and gives to airy nothing</p>
            <p>A local habitation and a name..."</p>
            <h3>- William Shakespeare (Midsummer Night's Dream)</h3>

            <Link to="/notes">Enter</Link>
        </div>
    );
}
export default Home;