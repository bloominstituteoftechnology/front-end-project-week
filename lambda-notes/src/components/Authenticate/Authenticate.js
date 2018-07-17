import React from 'react';
import Login from '../Login/Login';

const Authenticate = App =>
    class extends React.Component {
        constructor() {
            super();

            this.state = {
                loggedIn: true
            }
        }

        render() {
            if(this.state.loggedIn) return <App />
            return <Login />    
        }
    }

export default Authenticate;