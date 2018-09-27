import React, { Component } from 'react';
import Login from './Login';

// import App from '../../App';

const Authenticate = (App) =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
      };
    }

    componentDidMount() {
      this.props.history.push('/login');
      // if (localStorage.username && localStorage.password) {
      //   this.setState({
      //     loggedIn: true,
      //   });
      // }
    }

    handleLoggedIn = (bool) => {
      this.setState({
        loggedIn: bool,
      });
    };

    render() {
      console.log('authenticate', this.props, this.state);
      return this.state.loggedIn ? (
        <App />
      ) : (
        <Login {...this.props} handleLoggedIn={this.handleLoggedIn} />
      );
    }
  };

export default Authenticate;
