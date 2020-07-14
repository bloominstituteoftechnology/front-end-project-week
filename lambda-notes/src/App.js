import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import Login from './components/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        {this.props.current === 'login' ? (
          <div>
            <Login />
          </div>
        ) : (
          <div className="container">
            <SideBar />
            <MainContent />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current: state.current,
  };
};

export default connect(mapStateToProps, null)(App);
