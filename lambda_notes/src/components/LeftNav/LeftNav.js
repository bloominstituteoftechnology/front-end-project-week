import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class LeftNav extends Component {
    render() {
        return (
            <div className='nav_container'>
                <div>
                    <h1 className='nav_header'>Lambda Notes</h1>
                </div>
                <div className='nav_buttons_container'>
                    <Link to='/' className='button_link'>
                        <div className='nav_button'>View Your Notes</div>
                    </Link>
                    <Link to='/create' className='button_link'>
                        <div className='nav_button'>+ Create New Note</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default LeftNav;