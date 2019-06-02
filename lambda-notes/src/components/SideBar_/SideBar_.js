import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button_ from '../Button_/Button_';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/index';

class SideBar_ extends Component {
  render() {
    const noteButton = (
      <React.Fragment>
        <Link to="/notes">
          <Button_ text="View Your Notes" />
        </Link>
        <Link to="/new">
          <Button_ text="+ Create New Note" />
        </Link>
        <Link to="/">
          <Button_ text="Log out" action={this.props.logOutUser} />
        </Link>
      </React.Fragment>
    );
    const checkIn = (
      <React.Fragment>
        {(this.props.location.pathname === '/login' || this.props.location.pathname === '/') && (
          <Link to="/register">
            <Button_ text="Register" />
          </Link>
        )}
        {(this.props.location.pathname === '/register' || this.props.location.pathname === '/') && (
          <Link to="/login">
            <Button_ text="Login" />
          </Link>
        )}
      </React.Fragment>
    );
    return (
      <div className="col-3 side-bar">
        <Link to="/">
          <h1>Lambda Notes</h1>{' '}
        </Link>
        {this.props.loggedIn ? noteButton : checkIn}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.authUser,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logOutUser }
  )(SideBar_)
);
