import React, { Component } from 'react';
import './App.css';
import View from './Components/View/View';
import {connect} from 'react-redux';
import {add} from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <View notes={this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    info:state
  }
}



export default connect(mapStateToProps,{add})(App);
