import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class LeftNav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div classname='nav_container'>
               <h1 className='nav_header'> Lambda Notes </h1>
            </div>
            <div className='nav_button_container'>
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