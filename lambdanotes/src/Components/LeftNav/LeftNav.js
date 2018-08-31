import React, { Component} from 'react';
import './index.css';
import {Link } from 'react-router-dom';

class LeftNav extends React.Component {
    render() {
        return (
          <div className='nav-container'>
        
             <div className="header-title">
                <h1>Lambda Notes</h1>
             </div>
             <div className='header-btns'>
             <a href='#'>
                <button>View Your Notes</button>
             </a>
             <a href='#' className='btn-link'>
                <button>+Create New Note</button>
             </a>  
             </div>
          </div>
        );
    }
}

export default LeftNav;