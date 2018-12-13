import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from "../Authenticate/Logout";
import Axios from 'axios';

const getNotes = () => {
  Axios
    .get('http://localhost:3000')
    //.then(res => console.log(res.data))
    .catch(err => console.log(err));
}

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <h1>Lambda<br/>Notes</h1>
        <div className="link-section">
          <NavLink exact to='/' activeClassName='link'>
            <button onClick={getNotes}>View Your Notes</button>
          </NavLink>
          <NavLink to='/create' activeClassName='link'>
            <button>+ Create New Note</button>
          </NavLink>
          <Logout />
        </div>
      </div>
    )
  }
}

export default SideBar;