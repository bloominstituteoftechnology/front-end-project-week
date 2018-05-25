import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Error extends Component {
    render() {
        return (
            <div>
                <div className="errorContainer">
                    <p className="error404">404</p>
                    <p className="error">0ooopsies, page can not be found.</p>
                    <button className='button'>
                        <NavLink className='errorButton' to='/'>home</NavLink>
                    </button>
                </div>
            </div>
        );
    }
}

export default Error;