import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Auth/Login'
import Register from './Auth/Register'

class App extends Component {

  render() {
    return (
      <>
        <Redirect to="/app" exact from="/"/>
        <Route path="/app" render={props => <Home {...props}/>} />
        <Route path="/login" render={props => <Login {...props}/>} />
        <Route path="/register" render={props => <Register {...props}/>} />
      </>
    );
  }
}


export default App;
