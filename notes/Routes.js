import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Home from './containers/Home';
import Group from './containers/Group';

export const NotesDefaultSource = ({}) => {
  return (
    <Router history={browserHistory}>
        <Route path="./public/src/components/NotesDefaultSource" component={NotesDefaultSource} />
    </Router>
  )
};

// const mapState = ({}) => ({});
// const mapDispatch = {};
