import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <div className='side-bar'>
        <h1>Lambda<br/>Notes</h1>
        <div className='link section'>
          <NavLink exact to='/' activeClassName='link'>
            <button>View Your Notes</button>
          </NavLink>
          <NavLink to='/create' activeClassName='link'>
            <button>+ Create New Note</button>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default SideBar;