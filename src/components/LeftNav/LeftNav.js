import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './index.css';



export default class LeftNav extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  render() {
    return (
      <div className='container nav-container'>
        <div>
          <h1 className='nav-header'>Lambda Notes</h1>
          { localStorage.username ? <h5>Welcome back, {localStorage.username}. </h5> : null }
        </div>
        <div className='text-center'>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <button type='button' className="btn-block custom-button-teal-nav text-white">View Your Notes</button>
          </Link>

          <Link to="/create-note" style={{ textDecoration: 'none' }}>
            <button type='button' className="btn-block custom-button-teal-nav text-white">+ Create New Note</button>
          </Link>

          <Link to="/login" style={{ textDecoration: 'none' }}>
            {localStorage.token ? <button type='button' onClick={() => this.handleLogout()} className="btn btn-block custom-button-red-nav text-white">Logout</button> : null}
          </Link>

        </div>
      </div>
    )
  }
}
