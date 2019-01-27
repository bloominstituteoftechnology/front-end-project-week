import React from 'react';
import {withRouter} from 'react-router-dom';
import {Navbar, NavItem, NavbarBrand} from 'reactstrap';

class NavBar extends React.Component {
  viewNotes = () => {
    this.props.history.push ('/notes');
  };
  createNewNote = () => {
    this.props.history.push ('/create');
  };
  logout = () => {
    localStorage.removeItem ('jwt');
    localStorage.removeItem ('id');
    this.props.history.push ('/login');
    localStorage.setItem ('location', '/login');
  };
  redirectToLogIn = () => {
    if (localStorage.getItem ('location') === '/signup') {
      this.props.history.push ('/login');
      localStorage.setItem ('location', '/login');
    }
  };
  redirectToSignUp = () => {
    if (localStorage.getItem ('location') === '/login') {
      this.props.history.push ('/signup');
      localStorage.setItem ('location', '/signup');
    }
  };
  render () {
    if (
      localStorage.getItem ('location') === '/signup' ||
      localStorage.getItem ('location') === '/login'
    ) {
      return (
        <Navbar className="navigation" color="light" light expand="md">
          <NavbarBrand className="ml-3">Notes</NavbarBrand>
          <div>
            <NavItem className="link mr-5" onClick={this.redirectToLogIn}>
              Log In
            </NavItem>
            <NavItem className="link mr-3" onClick={this.redirectToSignUp}>
              Sign Up
            </NavItem>
          </div>
        </Navbar>
      );
    } else {
      return (
        <Navbar className="navigation" color="light" light expand="md">
          <NavbarBrand className="link ml-3" onClick={this.viewNotes}>
            Notes
          </NavbarBrand>
          <div>
            <NavItem className="link mr-5" onClick={this.createNewNote}>
              New Note
            </NavItem>
            <NavItem className="link mr-3" onClick={this.logout}>
              Log Out
            </NavItem>
          </div>
        </Navbar>
      );
    }
  }
}
export default withRouter (NavBar);
