import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './components/Nav';
import NoteContainer from './components/NoteContainer';
import AppStyled from './Styles/App';

class App extends Component {
  render() {
    return (
      <AppStyled>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={NoteContainer} />
      </AppStyled>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
