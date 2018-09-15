import React from 'react';
import Login from '../Login/Login';
import NotesList from '../NotesList';

const Authenticate = NotesList =>
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
        return (this.state.loggedIn ? <NotesList /> : <Login />);
    }
  }

export default Authenticate;
