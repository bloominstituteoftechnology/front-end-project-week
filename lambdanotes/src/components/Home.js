import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="homeBox">
            <h1 className="homeTitle">My Notes</h1>
            <p className="homeP">"And as imagination bodies forth</p> 
            <p className="homeP">The forms of things unkown,</p>
            <p className="homeP">The poets pen</p>
            <p className="homeP">Turns them to shapes and gives to airy nothing</p>
            <p className="homeP">A local habitation and a name..."</p>
            <h3 className="quoteAuthor">- William Shakespeare (Midsummer Night's Dream)</h3>

            <Link className="homeEnterButton" to="/notes">Enter</Link>
        </div>
    );
}
export default Home;