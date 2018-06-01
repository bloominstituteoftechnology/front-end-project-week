import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class SideNav extends Component {
  render() {
    return (
      <div className='side-nav'>
        <h1>Lambda<br />Notes</h1>
        <div>
          <Link to='/'>
            <button className='btn nav-btn'>View Your Notes</button>
          </Link>
          <Link to='/create'>
            <button className='btn nav-btn bottom-btn'>+Create New Note</button>
          </Link>
        </div>
      </div>
    )
  }
};

export default SideNav;
