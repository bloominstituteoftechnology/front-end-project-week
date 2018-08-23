import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
  class InnerApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      }
    }

/* Component displays only if localStorage contains a certain value */
    componentDidMount() {
      if (localStorage.getItem('token')) this.setState({
       loggedIn: true
     });
   }

    render() {
      console.log('Auth location', this.props.location);
        return (this.state.loggedIn ? <App /> : <Login />);
    }
  }
//This should only exist in the registration page version NOW IT SHOULD
export default Authenticate;
