import React, { Component } from 'react';
import './index.css';

class LeftNav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div classname='nav_container'>
               <h1 className='nav_header'> Lambda Notes </h1>
            </div>
            <div className='nav_button_container'>
            <a href='#' className='button_link'>
                <div className='nav_button'>View Your Notes</div>
                </a>
                <a href='#' className='button_link'>
                <div className='nav_button'>+ Create New Note</div>
                </a>
            </div>
            </div>
         );
    }
}
 
export default LeftNav;