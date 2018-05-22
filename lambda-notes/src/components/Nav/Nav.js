import React, { Component } from 'react';

class Nav extends Component {
    render() { 
        return (
            <div className="Nav-container">
                <h1>Lambda Notes</h1>
                <button className="main-button">View Your Notes</button>
                <button className="main-button">+ Create New Note</button>
            </div>
        )
    }
}
 
export default Nav;