import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UserLeftPanel from './UserLeftPanel';
import SignInForm from './SignInForm';
import LoginForm from './LoginForm';

const StyledUser = styled.div`
  display: flex;
  .loginHeading {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 620px;
    min-height: 700px;
    padding: 20px;
    background-color: #f3f3f3;
  }

`;

const User = props => (
  <StyledUser>
    {props.loggedIn ? <Redirect to={'/list'} /> : null}
    <UserLeftPanel />
    <div className='loginHeading'>
      <h5>New to Lambda-Notes?<br/>Register here:</h5>
      <SignInForm />
      <h5>Already a member?<br/>Login here:</h5>
      <LoginForm history={props.history}/>
    </div>
  </StyledUser>
);

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, null)(User);