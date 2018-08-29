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
                <button>View Your Notes</button>
                <button>Create New Note</button>
             </div>
          </div>
        );
    }
}

export default LeftNav;