import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state
  }
}

export default connect(mapStateToProps, { addNote })(App);
