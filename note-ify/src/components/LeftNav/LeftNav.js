import React, { Component } from 'react';
import './index.css'
import { Link } from 'react-router-dom'
class LeftNav extends Component {
    render() {
        return (
            <div className='nav_container'>
                <div>
                    <h1 className='nav_header'>Note-ify</h1>
                </div>
                <div classNames='nav_buttons_container'>
                    <Link to='/' className='button_link'>
                        <div className='nav_button'>Veiw Your Notes</div>
                    </Link>
                    <Link to='/create' className='button_link'>
                        <div className='nav_button'>+ Create Your Notes</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default LeftNav;