import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class LeftNav extends Component {
  render() {
    return (
      <div className='container nav-container'>
        <div>
          <h1 className='nav-header'>Lambda Notes</h1>
        </div>
        <div className='text-center'>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button type='button' className="btn-block custom-button-teal-nav text-white">View Your Notes</button>
          </Link>
          <Link to="/create-note" style={{ textDecoration: 'none' }}>
            <button type='button' className="btn-block custom-button-teal-nav text-white">+ Create New Note</button>
          </Link>
        </div>
      </div>
    )
  }
}
