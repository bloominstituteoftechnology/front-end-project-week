import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import TodoContainer from './TodoContainer'
import NavContainer from './NavContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className='navContainer'>
        <NavContainer />
        </div>
        <div className='mainContent'>
        <div className='headerContainer'>
        <HeaderContainer />
        </div>
        <div className='todoContainer'>
        <TodoContainer />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
