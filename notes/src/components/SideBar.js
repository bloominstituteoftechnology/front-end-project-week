import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class SideBar extends Component {
render() {
    return (
        <div>  <ul className="sidebar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            <button className="btn">View Your Notes</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/note-form" activeClassName="activeNavButton">
            <button className="btn">+ Create New Note</button>
          </NavLink>
        </li>
      </ul> </div>
    )
}
}

export default SideBar