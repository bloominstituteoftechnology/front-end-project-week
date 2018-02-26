import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SideBar from './components/SideBar';
import ListView from './components/ListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <ListView />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    creating: state.creating,
    editing: state.editing,
    deleting: state.deleting,
    expanded: state.expanded,
  };
};

export default connect(mapStateToProps)(App);
