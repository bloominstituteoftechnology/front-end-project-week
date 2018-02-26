import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SideBar from './components/SideBar';
import ListView from './components/ListView';
import CreateNote from './components/CreateNote';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' component={SideBar} />
          <Route path='/' component={ListView} exact />
          <Route path='/new' component={CreateNote} exact />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deleting: state.deleting,
  };
};

export default connect(mapStateToProps)(App);
