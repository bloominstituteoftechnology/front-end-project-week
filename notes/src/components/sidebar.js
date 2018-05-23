import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class SideBar extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem className="App-sideBar">
            <h1 className="text-white main-header">Lambda Notes</h1>
            <Link className="button" to="/">View Your Notes</Link>
            <Link className="button" to="/newnote">+ Create New Note</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}