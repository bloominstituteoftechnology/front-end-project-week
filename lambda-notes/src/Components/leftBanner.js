import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeftBanner extends Component {
    render() {
        return(
            <nav className='nav col-3 align-items-center justify-content-start flex-column banner'>
                <h2 className='header align-self-start ml-3 mt-2'>Lambda<br/>Notes</h2>

                    <Link className='navLink' to='/'>
                        <button className='navButton1 mt-3'>View Your Notes</button>
                    </Link>

                    <Link className='navLink' to='/addNote'>
                        <button className='navButton2 mt-2'>+ Create New Note</button>
                    </Link>
            </nav>
        )
    }
}

export default LeftBanner;