import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      }
    }

/*Component displays only if localStorage contains a certain value*/
    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({loggedIn: false});
      } else {
        this.setState({loggedIn: true});
      }
    }

    render() {
      if (this.state.loggedIn) return <App />;
      return <Login />;
    }
  };

export default Authenticate;
