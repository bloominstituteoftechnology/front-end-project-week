import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Nav extends Component {
    render() { 
        return (
            <div className="Nav-container">
                <h1>Lambda Notes</h1>
                <Link to="/">
                    <button className="main-button">View Your Notes</button>
                </Link>
                <Link to="/newnote">
                    <button className="main-button">+ Create New Note</button>
                </Link>
            </div>
        )
    }
}
 
export default Nav;