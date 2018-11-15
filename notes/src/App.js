import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from './components/Nav';
import NoteContainer from './components/NoteContainer';
import AppStyled from './Styles/App';
import ViewNote from './components/ViewNote';

class App extends Component {
  render() {
    return (
      <AppStyled>
        <Route path='/' component={Nav} />
        <Route exact path='/' component={NoteContainer} />
        <Route path='/view-note' component={ViewNote} />
      </AppStyled>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
