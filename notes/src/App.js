import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
  
  }
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.notes,
    searchText: state.searchText,

  }
}

export default connect(mapStateToProps, {})(App);
