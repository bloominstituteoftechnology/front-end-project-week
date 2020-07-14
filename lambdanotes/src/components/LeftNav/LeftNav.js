import React, { Component } from 'react';
import './index.css';

class LeftNav extends Component {
    render() {
        return(
            <div className = 'nav_container'>
                <div>
                <h1 className= 'nav_header'>LambdaNotes</h1>
                </div>
                <div className='nav_buttons_container'>
                    <button className='nav_button'>View Your Notes</button>
                    <button className='nav_button'>+ Create New Now</button>
                    </div>
            </div>
        );
    }
}

export default LeftNav;