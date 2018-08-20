import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import {Route, Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
      
        <div className='App'>
        <Route path='/' component={SideBar} />
        <Link to="/"></Link>
        </div>
      </div>
    );
  }
}

export default App;
