import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todoList.js';
import LeftBox from './components/LeftBox';
import CreateNote from './components/CreateNote';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';
import { connect } from 'react-redux';

class App extends Component {
  render(props) {
    return (
      <div className="AppContainer">
      <div className="App">
        <LeftBox />
        <TodoList cardinfo={this.props.cardinfo}/>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cardinfo: state
  };
}

export default connect(mapStateToProps)(App);