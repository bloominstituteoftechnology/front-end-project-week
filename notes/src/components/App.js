import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NoteContainer from './NoteContainer';
import Navbar from './navbar';
import { fetchPosts } from '../actions';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  render() {
    return (
      <div className="app">
        <Navbar />
        <NoteContainer />
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchPosts })(App));
