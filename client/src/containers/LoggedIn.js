// import React from 'react';
import { connect } from 'react-redux';

const LoggedIn = ({ isLoggedIn, children }) => {
  return children({ isLoggedIn });
};

export default connect(({ isLoggedIn }) => ({ isLoggedIn }))(LoggedIn);
