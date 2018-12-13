import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './Dashboard/container';
import Login from './Auth/Login'
import Register from './Auth/Register'
import Home from './Home/Home';

class App extends Component {

  render() {
    return (
      <>
        <Route path="/" exact render={props => <Home {...props}/>} />
        <Route path="/app" render={props => <Dashboard {...props}/>} />
        <Route path="/login" render={props => <Login {...props}/>} />
        <Route path="/register" render={props => <Register {...props}/>} />
      </>
    );
  }
}


export default App;
