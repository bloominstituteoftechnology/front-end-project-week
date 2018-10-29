import React, { Component } from 'react';
// import HeaderContainer from './HeaderContainer'
import NoteContainer from './NoteContainer'
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
        {/* <div className='headerContainer'>
        <HeaderContainer />
        </div> */}
        <NoteContainer />
        </div>
      </div>
    );
  }
}

export default App;
