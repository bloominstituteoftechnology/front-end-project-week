import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/index';

class SideMenu extends Component {
  render() {
    return (
      <div className="background">
        <h1 className="lambda">Lambda</h1>
        <h1 className="notes">Notes</h1>
        {this.props.authenticated ? (
          <Link to="/" className="create" onClick={this.submitHandler}>
            Logout
          </Link>
        ) : (
          <Link
            to="https://lambdanotes-frontend.herokuapp.com/login"
            className="create"
          >
            login
          </Link>
        )}
        <Link
          to="https://lambdanotes-frontend.herokuapp.com/signup"
          className="create"
        >
          {' '}
          Register{' '}
        </Link>
        <Link
          to="https://lambdanotes-frontend.herokuapp.com/Create"
          className="create"
        >
          + Create New Note
        </Link>
        <Link
          to="https://lambdanotes-frontend.herokuapp.com/home"
          className="create"
        >
          View Your Notes
        </Link>
      </div>
    );
  }

  submitHandler = () => {
    this.props.logout();
  };
}
const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps, { logout })(SideMenu);
