import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LoginCheck, logOut, goHome } from '../actions';
import Login from '../components/Login';
import Register from '../components/Register';
import { Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const RegisterAndLoginContainer = styled.div`
  width: 100%;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #ef62a4;
  width: 95%;
  font-size: 1.2rem;
  margin-bottom: 10px;
  margin-top: 15px;
`;

const url = process.env.REACT_APP_API_URL;

const initialState = {
  loggingIn: null,
  registering: null
};

class RegisterAndLoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: { ...initialState },
      message: ''
    };
  }

  clickHandler = event => {
    event.preventDefault();
    console.log('the state is ... ', this.state);
    console.log('the props are ... ', this.props);
    localStorage.removeItem('secret_notes_token');
    localStorage.removeItem('user_id');
    console.log('the props are ... ', this.props);
    this.props.logOut();
    this.props.history.push('/fronte-end-project-week/loggedOut');
  };

  homeClickHandler = event => {
    event.preventDefault();
    this.props.goHome();
    this.props.history.push('/front-end-project-week');
  };

  render() {
    return (
      <div>
        <RegisterAndLoginContainer>
          <NavContainer>
            <NavLink to="/front-end-project-week/">
              <div onClick={this.homeclickHandler}>Home</div>
            </NavLink>
            <NavLink to="/front-end-project-week/login">Login</NavLink>
            <NavLink to="/front-end-project-week/register">Register</NavLink>

            <NavLink to="/front-end-project-week/logOut">
              {' '}
              <div onClick={this.clickHandler}>Logout</div>
            </NavLink>
          </NavContainer>
        </RegisterAndLoginContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error,
    notes: state.notes,
    isActive: state.isActive
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      LoginCheck,
      logOut,
      goHome
    }
  )(RegisterAndLoginView)
);
