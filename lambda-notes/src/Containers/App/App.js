import React, { Component } from 'react';
import classes from './App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Cockpit} from '../../Components/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
    };
  }
  render() {
    return (
      <div className={classes.Container}>
        <Router>
          <Cockpit/>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}
export default connect(mapStateToProps)(App);
