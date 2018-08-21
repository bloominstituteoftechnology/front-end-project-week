import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class LeftNav extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    const URL = 'http://localhost:3000/';
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = URL;
  }

  render() {
    return (
      <div className='container nav-container'>
        <div>
          <h1 className='nav-header'>Lambda Notes</h1>
          {localStorage.username ? <p className="">Welcome back, {localStorage.username}</p> : null}
        </div>
        <div className='text-center'>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <button type='button' className="btn-block custom-button-teal-nav text-white">View Your Notes</button>
          </Link>

          <Link to="/create-note" style={{ textDecoration: 'none' }}>
            <button type='button' className="btn-block custom-button-teal-nav text-white">+ Create New Note</button>
          </Link>

          {localStorage.token ? <button type='button' onClick={() => this.handleLogout()} handleLogout={() => this.handleLogout} className="btn btn-danger mr-2">Logout</button> : null}

        </div>
      </div>
    )
  }
}
