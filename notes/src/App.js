import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Nav} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
