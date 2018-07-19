import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../lambda-black.png';

const Navigation = props => {
    return (
        <div className="Nav-container">
            <div className="Nav-header">
                <h1>Lambda</h1>
                <h1>Notes</h1>
                <img src={logo} alt="lambda-black"/>
            </div>
            <div className="Nav-buttons">
                <Link to="/"><button>View Your Notes</button></Link>
                <Link to="/create"><button>+ Create New Note</button></Link>
            </div>
        </div>
    );

};

export default Navigation;