//IMPORTS
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'reactstrap';

//NAV BAR COMPONENT
class LeftBanner extends Component {
    render() {
        return(
            <div>
                <Navbar>
                    <Nav>
                        <h2 className='mt-2 font-weight-bold text-left ml-2 header'>Lambda<br/>Notes</h2>
                        <Link to='/'>
                            <button className='mt-3 navButton1'>View Your Notes</button>
                        </Link>
                        <Link to='/'>
                            <button className='mt-3 navButton2'>+ Create New Note</button>
                        </Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default LeftBanner;