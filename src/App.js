import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';
import { persistLogIn } from './actions/index';

import Main from './component/Main';
import NavBar from './component/NavBar';
import User from './component/User';

import './App.css';

class App extends Component {

  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.props.persistLogIn()
    }
  }
 
  render() {
    const App = () => {
      return (
      <div className='App'>
        <NavBar />
        <Main  />
      </div>
      );
    }
    const PrivateRoute = ({ component: Component, ...rest}) => (
      <Route
      {...rest}
      render={props => this.props.loggedIn ? (<Component {...props} />) : (<Redirect to='/' />)}
      />
    )
    return (
      <div>
        <PrivateRoute path='/notes' component={App} />
        <Route exact path='/' render={() => (
          this.props.loggedIn ? (
            <Redirect to='/notes' />
          ) : (<User />)  
        )} />
        <Route path='/notes' render={() => (
          this.props.loggedOut ? (
            <Redirect to='/' />
          ) : <Route to='/notes' />  
        )} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    loggedOut: state.loggedOut
  }
}

export default withRouter(connect(mapStateToProps, {persistLogIn})(App));
