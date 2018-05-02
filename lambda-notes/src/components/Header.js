import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  getLinks() {
    if (this.props.authenticated) {
      return (
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
      );
    }
    return [
      <li key={1}>
        <Link to="/signin">Sign In</Link>
      </li>,
      <li key={2}>
        <Link to="/signup">Sign Up</Link>
      </li>
    ];
  }

  render() {
    return (
      <div>
        <Link to="/">Client Auth</Link>
        <ul>{this.getLinks()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Header);
