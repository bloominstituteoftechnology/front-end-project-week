import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions';
import './Logout.css';

function Logout(props) {
  props.logout();
  setTimeout(() => props.history.push('/'), 2000);
  return (
    <div className='logout'>
      <h1>You've been logged out.</h1>
    </div>
  );
}

export default connect(null, { logout } )(Logout);