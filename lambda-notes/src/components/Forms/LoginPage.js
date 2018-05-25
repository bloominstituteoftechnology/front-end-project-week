// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginPage = (props) => {
  if (props.user) return <Redirect to="/notes" />;

  const pgStyl = {
    background:"var(--color-bg--main)",
    height:"100%",

  }
  return (
    <div style={{background: "var(--color-bg--main)", height: "100%"}} className="login-page text-center pa-5">
      <h3>Welcome to LambdaNotes</h3>
      <p>Log on in to get started!</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, null)(LoginPage);