// importing libraries
import React from 'react';
import { connect } from 'react-redux';

// importing actions
import { logout } from '../store/actions';

// importing component
import NavBar from '../components/NavBar/NavBar';

const NavBarView = props => {
  return (
    <NavBar {...props} />
  );
}
 
export default connect(
  state => ({}),
  { logout }
)(NavBarView)