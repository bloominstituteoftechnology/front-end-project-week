import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navigation extends Component {

  render() {
    return (
      <div className='navbar'>
        <div className='navbar-intro'>｡ ◕‿◕｡ Kawaii Notes 1.0</div>
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps)(Navigation);
